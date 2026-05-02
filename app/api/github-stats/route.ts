import { NextResponse } from 'next/server'
import {
  GITHUB_CONTRIBUTION_USERNAMES,
  PUB_DEV_PACKAGE_NAMES,
} from '@/config/github'
import { fetchMergedGithubContributions } from '@/lib/github-contributions'
import {
  fetchGithubPublicProfile,
  sumStargazersForUser,
} from '@/lib/github-rest-stats'
import {
  type GithubStatsPayload,
  yearsSinceEarliestGithubJoin,
} from '@/lib/github-stats-payload'
import { countStoreListedProjects } from '@/data/projects'
import { portfolioSkills } from '@/data/portfolio-skills'

export const revalidate = 600

async function fetchPubScore(packageName: string) {
  const res = await fetch(
    `https://pub.dev/api/packages/${encodeURIComponent(packageName)}/score`,
    { next: { revalidate: 3600 } },
  )
  if (!res.ok) {
    return { likeCount: 0, downloadCount30Days: 0 }
  }
  const j = (await res.json()) as {
    likeCount?: number
    downloadCount30Days?: number
  }
  return {
    likeCount: j.likeCount ?? 0,
    downloadCount30Days: j.downloadCount30Days ?? 0,
  }
}

export async function GET() {
  const logins = [...new Set(GITHUB_CONTRIBUTION_USERNAMES as readonly string[])]

  try {
    const merged = await fetchMergedGithubContributions(logins, 'last')

    const profiles = await Promise.all(
      logins.map((login) => fetchGithubPublicProfile(login)),
    )
    const starTotals = await Promise.all(
      logins.map((login) => sumStargazersForUser(login)),
    )

    const totalRepos = profiles.reduce((s, p) => s + p.public_repos, 0)
    const totalStars = starTotals.reduce((s, n) => s + n, 0)

    const pubScores: GithubStatsPayload['pubScores'] = {}
    await Promise.all(
      PUB_DEV_PACKAGE_NAMES.map(async (name) => {
        pubScores[name] = await fetchPubScore(name)
      }),
    )

    const pubDownloads30DaysTotal = Object.values(pubScores).reduce(
      (s, p) => s + p.downloadCount30Days,
      0,
    )
    const publishedStoreAppsCount = countStoreListedProjects()
    const yearsOnGithub = yearsSinceEarliestGithubJoin(
      profiles.map((p) => p.created_at),
    )

    const body: GithubStatsPayload = {
      totalRepos,
      totalStars,
      contributionsLastYear: merged.totalLastYear,
      publishedPackageCount: PUB_DEV_PACKAGE_NAMES.length,
      pubScores,
      pubDownloads30DaysTotal,
      publishedStoreAppsCount,
      yearsOnGithub,
      technologiesListedCount: portfolioSkills.length,
      calendarContributions: merged.contributions,
      fetchedAt: new Date().toISOString(),
    }

    return NextResponse.json(body)
  } catch {
    return NextResponse.json(
      { error: 'Unable to load live GitHub stats' },
      { status: 502 },
    )
  }
}
