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
            {/* Blog Section Container with Border */}
            <div className="border border-zinc-700 bg-[#121212] rounded-lg p-8 relative">
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#64FFDA] rounded-tl-md"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#64FFDA] rounded-tr-md"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#64FFDA] rounded-bl-md"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#64FFDA] rounded-br-md"></div>
              
              <h1 className="text-3xl font-bold mb-12 text-white">{t('blogs.title')}</h1>
            
            <div className="space-y-0 mb-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            
            <div className="py-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">{t('blogs.comingSoon')}</h3>
              <p className="text-white/70 mb-1">{t('blogs.comingSoonDesc')}</p>
              <p className="text-sm text-white/50">{t('blogs.additionalContent')}</p>
            </div>
            </div>
          </section>
        </div>
      </Screen>
    </div>
  );
} 