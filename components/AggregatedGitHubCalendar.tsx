'use client'

import React, { useEffect, useState } from 'react'
import ActivityCalendar, { Skeleton } from 'react-activity-calendar'
import {
  fetchMergedGithubContributions,
  type GithubActivity,
} from '@/lib/github-contributions'

type AggregatedGitHubCalendarProps = {
  usernames: readonly string[]
  colorScheme: 'light' | 'dark'
  fontSize?: number
  blockSize?: number
  blockMargin?: number
  showWeekdayLabels?: boolean
  theme?: {
    light: string[]
    dark: string[]
  }
  year?: number | 'last'
  /**
   * Server-merged calendar (e.g. from GET /api/github-stats). When `waitForPreload`
   * is true, the chart waits for this instead of calling the API from the browser.
   */
  preloaded?: {
    contributions: GithubActivity[]
    totalLastYear: number
  }
  /** If true, never fetches in the browser; show loading until `preloaded` is set. */
  waitForPreload?: boolean
}

export default function AggregatedGitHubCalendar({
  usernames,
  colorScheme,
  fontSize = 12,
  blockSize = 10,
  blockMargin = 3,
  showWeekdayLabels,
  theme,
  year = 'last',
  preloaded,
  waitForPreload = false,
}: AggregatedGitHubCalendarProps) {
  const [data, setData] = useState<GithubActivity[] | null>(() =>
    preloaded ? preloaded.contributions : null,
  )
  const [totalCount, setTotalCount] = useState<number | undefined>(() =>
    preloaded ? preloaded.totalLastYear : undefined,
  )
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (waitForPreload) {
      if (preloaded) {
        setData(preloaded.contributions)
        setTotalCount(preloaded.totalLastYear)
        setError(null)
      }
      return
    }

    if (preloaded) {
      setData(preloaded.contributions)
      setTotalCount(preloaded.totalLastYear)
      setError(null)
      return
    }

    let cancelled = false
    setData(null)
    setError(null)

    fetchMergedGithubContributions(usernames, year)
      .then(({ contributions, totalLastYear }) => {
        if (!cancelled) {
          setData(contributions)
          setTotalCount(totalLastYear)
        }
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : 'Failed to load contributions',
          )
        }
      })

    return () => {
      cancelled = true
    }
  }, [usernames, year, waitForPreload, preloaded])

  if (error) {
    return (
      <p className="text-sm text-red-400/90" role="alert">
        {error}
      </p>
    )
  }

  if (!data) {
    return (
      <Skeleton
        colorScheme={colorScheme}
        fontSize={fontSize}
        blockSize={blockSize}
        blockMargin={blockMargin}
        showWeekdayLabels={showWeekdayLabels}
        theme={theme}
        loading
      />
    )
  }

  return (
    <ActivityCalendar
      data={data}
      colorScheme={colorScheme}
      fontSize={fontSize}
      blockSize={blockSize}
      blockMargin={blockMargin}
      showWeekdayLabels={showWeekdayLabels}
      theme={theme}
      totalCount={totalCount}
      labels={{
        totalCount: `{{count}} contributions in the last year`,
      }}
      maxLevel={4}
    />
  )
}
