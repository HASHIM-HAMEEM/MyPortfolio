import type { GithubActivity } from '@/lib/github-contributions'

export type GithubStatsPayload = {
  totalRepos: number
  totalStars: number
  contributionsLastYear: number
  publishedPackageCount: number
  pubScores: Record<string, { likeCount: number; downloadCount30Days: number }>
  /** Sum of pub.dev download counts (last 30 days) across tracked packages. */
  pubDownloads30DaysTotal: number
  /** Listings that point to Google Play or App Store from `data/projects`. */
  publishedStoreAppsCount: number
  /** Full years since the oldest linked GitHub account was created. */
  yearsOnGithub: number
  /** Distinct technologies listed in the Skills section (`data/portfolio-skills`). */
  technologiesListedCount: number
  /** Pre-merged contribution grid (same source as the calendar). */
  calendarContributions: GithubActivity[]
  fetchedAt: string
}

export function yearsSinceEarliestGithubJoin(createdAtIsoDates: string[]): number {
  if (createdAtIsoDates.length === 0) return 1
  const earliest = createdAtIsoDates.reduce((a, b) =>
    new Date(a).getTime() <= new Date(b).getTime() ? a : b,
  )
  const ms = Date.now() - new Date(earliest).getTime()
  return Math.max(
    1,
    Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000)),
  )
}

export function formatCompactCount(n: number): string {
  if (!Number.isFinite(n)) return '—'
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 100_000) return `${Math.round(n / 1000)}k`
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return String(Math.round(n))
}
