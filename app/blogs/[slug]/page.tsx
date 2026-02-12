import Screen from "@/layout/Screen";
import Header from "@/components/Header";
import LocalTime from "@/utils/LocalTime";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${blog.title} | Hashim Hameem`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      publishedTime: blog.date,
      tags: blog.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <LocalTime />
      <Screen>
        <div className="flex flex-col gap-2 pt-4">
          <Header />
          
          <section className="px-4 max-w-4xl mx-auto">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-[#64FFDA] hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>

            <article className="bg-[#1F1F1F] p-8 rounded-lg border border-[#2A2A2A]">
              <div className="text-sm text-white/60 mb-4">{blog.date}</div>
              <h1 className="text-3xl font-bold text-[#64FFDA] mb-4">{blog.title}</h1>
              <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
                <span>{blog.readTime} min read</span>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-[#2A2A2A] text-[#E1E3E5] px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h1 className="text-2xl font-bold text-[#64FFDA] mb-4 mt-6">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-xl font-bold text-[#64FFDA] mb-3 mt-5">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-lg font-semibold text-white mb-2 mt-4">{children}</h3>,
                    p: ({ children }) => <p className="text-[#E1E3E5] leading-relaxed mb-4">{children}</p>,
                    code: ({ children }) => (
                      <code className="bg-[#2A2A2A] text-[#64FFDA] px-2 py-1 rounded text-sm">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-[#0A0A0A] p-4 rounded-lg overflow-x-auto mb-4 border border-[#2A2A2A]">
                        {children}
                      </pre>
                    ),
                    ul: ({ children }) => <ul className="list-disc list-inside text-[#E1E3E5] mb-4 space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside text-[#E1E3E5] mb-4 space-y-1">{children}</ol>,
                    li: ({ children }) => <li className="text-[#E1E3E5]">{children}</li>,
                    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
            </article>
          </section>
        </div>
      </Screen>
    </div>
  );
}
