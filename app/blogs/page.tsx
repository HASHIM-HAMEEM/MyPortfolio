'use client'

import Screen from "@/layout/Screen";
import Header from "@/components/Header";
import LocalTime from "@/utils/LocalTime";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogsPage() {
  const { t } = useLanguage()
  
  return (
    <div>
      <LocalTime />
      <Screen>
        <div className="flex flex-col gap-2 pt-4">
          <Header />
          
          <section className="px-4 relative pt-8 pb-8">
            <div className="portfolio-card rounded-lg p-8 relative">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[var(--line-strong)] rounded-tl-md"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[var(--line-strong)] rounded-tr-md"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[var(--line-strong)] rounded-bl-md"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[var(--line-strong)] rounded-br-md"></div>
              
              <h1 className="text-3xl font-semibold mb-12 section-title">{t('blogs.title')}</h1>
            
            <div className="space-y-0 mb-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            
            <div className="py-6 border-b border-[var(--line)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{t('blogs.comingSoon')}</h3>
              <p className="text-soft mb-1">{t('blogs.comingSoonDesc')}</p>
              <p className="text-sm text-muted-theme">{t('blogs.additionalContent')}</p>
            </div>
            </div>
          </section>
        </div>
      </Screen>
    </div>
  );
} 
