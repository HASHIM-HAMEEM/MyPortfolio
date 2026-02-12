"use client"

import React from 'react'
import Link from 'next/link'
import { blogs } from '@/data/blogs'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FeaturedBlogs() {
  const { t } = useLanguage()
  const recentBlogs = blogs.slice(0, 3)

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#E1E3E5]">
          {t('blogs.recentTitle') || 'Recent Blogs'}
        </h2>
        <Link
          href="/blogs"
          className="text-[#64FFDA] hover:text-[#64FFDA]/80 text-sm font-medium transition-colors inline-flex items-center gap-1 group"
        >
          {t('blogs.viewAll') || 'View All'}
          <svg
            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="space-y-4">
        {recentBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="group block"
          >
            <div className="rounded-xl border border-zinc-700/80 bg-[#121212] p-5 transition-all duration-300 hover:border-[#64FFDA]/30 hover:shadow-lg hover:shadow-[#64FFDA]/5">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-zinc-500 font-mono shrink-0">
                      {blog.date}
                    </span>
                    <span className="text-zinc-600">-</span>
                    <span className="text-xs text-zinc-500">
                      {blog.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#E1E3E5] group-hover:text-[#64FFDA] transition-colors leading-snug mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#1a1a1a] border border-zinc-700/80 text-[10px] font-medium text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="text-[10px] text-zinc-500">
                        +{blog.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-[#1a1a1a] border border-zinc-700/50 text-zinc-500 group-hover:text-[#64FFDA] group-hover:border-[#64FFDA]/30 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
