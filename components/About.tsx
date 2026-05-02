'use client'

import React, { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  type GithubStatsPayload,
  formatCompactCount,
} from '@/lib/github-stats-payload'

const ABOUT_PROFESSIONAL_YEARS = 5

const About = () => {
  const { t } = useLanguage()
  const [live, setLive] = useState<GithubStatsPayload | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/github-stats')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: GithubStatsPayload) => {
        if (!cancelled) setLive(data)
      })
      .catch(() => {
        if (!cancelled) setLive(null)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <h2 className="text-2xl font-semibold section-title my-4 mb-5">
        {t('about.title')}
      </h2>
      <p className="text-soft leading-relaxed tracking-normal">
        {t('about.description1')}
      </p>
      <br />
      <p className="text-soft leading-relaxed tracking-normal">
        {t('about.description2')}
      </p>
      <br />
      <p className="text-soft leading-relaxed tracking-normal">
        {t('about.description3')}
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="soft-panel p-4 rounded-lg">
          <div className="text-3xl font-semibold accent-text">
            {live ? formatCompactCount(live.totalRepos) : '—'}
          </div>
          <div className="text-sm text-muted-theme mt-1">
            {t('about.projects')}
          </div>
        </div>
        <div className="soft-panel p-4 rounded-lg">
          <div className="text-3xl font-semibold accent-text">
            {ABOUT_PROFESSIONAL_YEARS}
          </div>
          <div className="text-sm text-muted-theme mt-1">
            {t('about.yearsExperience')}
          </div>
        </div>
        <div className="soft-panel p-4 rounded-lg">
          <div className="text-3xl font-semibold accent-text">
            {live ? String(live.technologiesListedCount) : '—'}
          </div>
          <div className="text-sm text-muted-theme mt-1">
            {t('about.technologies')}
          </div>
        </div>
      </div>
      <div className="mt-6 soft-panel p-4 rounded-lg">
        <div className="text-sm text-muted-theme mb-2">{t('about.education')}</div>
        <div className="text-[var(--text-primary)] font-semibold">
          {t('about.degree')}
        </div>
        <div className="text-sm text-muted-theme">{t('about.university')}</div>
      </div>
    </>
  )
}

export default About
