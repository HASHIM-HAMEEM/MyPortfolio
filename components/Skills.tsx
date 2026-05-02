"use client"

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { portfolioSkills } from '@/data/portfolio-skills'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold section-title mb-1">
        {t('skills.title')}
      </h2>
      <p className="text-muted-theme text-sm mb-5">
        {t('skills.subtitle') || 'The tech arsenal behind my builds!'}
      </p>
      <div className="flex flex-wrap gap-3">
        {portfolioSkills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 py-2 px-3 rounded-lg soft-panel text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[rgb(var(--brand-rgb)/0.4)] hover:scale-[1.02]"
          >
            {skill.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={skill.logo}
                alt=""
                className="w-5 h-5 object-contain flex-shrink-0"
              />
            ) : (
              <span className="w-5 h-5 rounded-full border border-[var(--line-strong)] flex-shrink-0" />
            )}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
