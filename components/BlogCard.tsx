import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blogs';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`} className="block">
      <div className="flex gap-6 py-6 border-b border-[var(--line)] hover:bg-[rgb(var(--brand-rgb)/0.04)] transition-colors group">
        <div className="w-32 flex-shrink-0">
          <div className="text-sm text-muted-theme">{blog.date}</div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:accent-text transition-colors">
            {blog.title}
          </h3>
          <p className="text-soft text-sm leading-relaxed mb-3 line-clamp-2">
            {blog.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs soft-panel text-[var(--text-primary)] px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
