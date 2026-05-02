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
        <h2 className="text-2xl font-semibold section-title">
          {t('blogs.recentTitle') || 'Recent Blogs'}
        </h2>
        <Link
          href="/blogs"
          className="accent-text hover:opacity-80 text-sm font-medium transition-opacity inline-flex items-center gap-1 group"
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
            <div className="rounded-xl p-5 portfolio-card portfolio-card-hover">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-muted-theme font-mono shrink-0">
                      {blog.date}
                    </span>
                    <span className="text-muted-theme">-</span>
                    <span className="text-xs text-muted-theme">
                      {blog.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:accent-text transition-colors leading-snug mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-soft leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded-md soft-panel text-[10px] font-medium text-muted-theme"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="text-[10px] text-muted-theme">
                        +{blog.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center shrink-0 w-10 h-10 rounded-lg soft-panel text-muted-theme group-hover:accent-text transition-all">
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
