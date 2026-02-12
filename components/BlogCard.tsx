import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blogs';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`} className="block">
      <div className="flex gap-6 py-6 border-b border-white/10 hover:bg-white/5 transition-colors group">
        {/* Date Column - Left */}
        <div className="w-32 flex-shrink-0">
          <div className="text-sm text-white/60">{blog.date}</div>
        </div>
        
        {/* Content Column - Right */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#64FFDA] transition-colors">
            {blog.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-2">
            {blog.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-white/10 text-white px-2 py-1 rounded"
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
