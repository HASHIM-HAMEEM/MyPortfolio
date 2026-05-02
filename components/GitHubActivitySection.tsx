"use client"

import React, { useEffect, useMemo, useState } from 'react'
import AggregatedGitHubCalendar from '@/components/AggregatedGitHubCalendar'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from 'next-themes'
import { Github } from 'lucide-react'
import {
  GITHUB_CONTRIBUTION_USERNAMES,
  GITHUB_PRIMARY_USERNAME,
} from '@/config/github'
import type { GithubStatsPayload } from '@/lib/github-stats-payload'

export default function GitHubActivitySection() {
  const { t } = useLanguage()
  const { resolvedTheme } = useTheme()
  const colorScheme = resolvedTheme === 'light' ? 'light' : 'dark'
  const calendarTheme = {
    light: ['#e8e8e8', '#c7c7c7', '#9a9a9a', '#5f5f5f', '#111111'],
    dark: ['#1a1a1a', '#333333', '#6b6b6b', '#a3a3a3', '#f5f5f5'],
  }

  const [liveStats, setLiveStats] = useState<GithubStatsPayload | null>(null)
  const [statsApiFailed, setStatsApiFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('/api/github-stats')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: GithubStatsPayload) => {
        if (!cancelled) setLiveStats(data)
      })
      .catch(() => {
        if (!cancelled) {
          setLiveStats(null)
          setStatsApiFailed(true)
        }
      })
    return () => {
      cancelled = true
    }
  }, [])

  const calendarPreload = useMemo(
    () =>
      liveStats
        ? {
            contributions: liveStats.calendarContributions,
            totalLastYear: liveStats.contributionsLastYear,
          }
        : undefined,
    [liveStats],
  )

  return (
    <section className="py-4">
      <div className="portfolio-card portfolio-card-hover rounded-xl p-5 md:p-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <h2 className="text-xl font-semibold section-title flex items-center gap-2">
            <Github className="h-5 w-5 accent-text" />
            {t('devCorner.githubActivity') || 'GitHub Activity'}
          </h2>
          <a
            href={`https://github.com/${GITHUB_PRIMARY_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-theme font-mono soft-panel px-3 py-1 rounded-md hover:accent-text transition-colors w-fit"
          >
            @{GITHUB_PRIMARY_USERNAME}
          </a>
        </div>

        <div className="flex justify-center w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          <div className="min-w-fit">
            <AggregatedGitHubCalendar
              usernames={GITHUB_CONTRIBUTION_USERNAMES}
              colorScheme={colorScheme}
              fontSize={12}
              blockSize={10}
              blockMargin={3}
              showWeekdayLabels
              theme={calendarTheme}
              preloaded={calendarPreload}
              waitForPreload={!statsApiFailed}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
