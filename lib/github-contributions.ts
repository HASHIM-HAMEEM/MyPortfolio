/**
 * GitHub contribution calendar from the same public API used by react-github-calendar.
 * @see https://github.com/grubersjoe/github-contributions-api
 */

export type GithubActivity = {
  date: string
  count: number
  level: number
}

export type GithubContributionsApiResponse = {
  total: { lastYear: number }
  contributions: GithubActivity[]
}

const API_BASE = 'https://github-contributions-api.jogruber.de/v4/'

export async function fetchGithubContributions(
  username: string,
  year: number | 'last' = 'last',
): Promise<GithubContributionsApiResponse> {
  const response = await fetch(`${API_BASE}${username}?y=${year}`)
  const data: GithubContributionsApiResponse & { error?: string } = await response.json()
  if (!response.ok) {
    throw new Error(
      data.error ?? `Fetching GitHub contribution data for "${username}" failed`,
    )
  }
  return data as GithubContributionsApiResponse
}

function levelsFromCounts(countsByDate: Map<string, number>): GithubActivity[] {
  const dates = [...countsByDate.keys()].sort()
  const maxC = Math.max(0, ...dates.map((d) => countsByDate.get(d) ?? 0))

  return dates.map((date) => {
    const count = countsByDate.get(date) ?? 0
    let level = 0
    if (count > 0 && maxC > 0) {
      level = Math.min(4, Math.max(1, Math.ceil((count / maxC) * 4)))
    }
    return { date, count, level }
  })
}

/** Sum per-day counts across N API responses and recompute heatmap levels (GitHub-style buckets). */
export function mergeGithubContributionResponses(
  responses: GithubContributionsApiResponse[],
): { contributions: GithubActivity[]; totalLastYear: number } {
  const sums = new Map<string, number>()

  for (const res of responses) {
    for (const row of res.contributions) {
      sums.set(row.date, (sums.get(row.date) ?? 0) + row.count)
    }
  }

  const contributions = levelsFromCounts(sums)
  const totalLastYear = contributions.reduce((acc, c) => acc + c.count, 0)

  return { contributions, totalLastYear }
}

export async function fetchMergedGithubContributions(
  usernames: readonly string[],
  year: number | 'last' = 'last',
): Promise<{ contributions: GithubActivity[]; totalLastYear: number }> {
  const unique = [...new Set(usernames.map((u) => u.trim()).filter(Boolean))]
  const results = await Promise.all(
    unique.map((u) => fetchGithubContributions(u, year)),
  )
  return mergeGithubContributionResponses(results)
}
