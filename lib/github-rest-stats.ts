/**
 * GitHub REST API (server-side). Optional GITHUB_TOKEN for higher rate limits.
 */

function githubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN?.trim()
  const h: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (token) {
    h.Authorization = `Bearer ${token}`
  }
  return h
}

const nextFetch = { next: { revalidate: 600 } as const }

export type GithubUserPublic = {
  login: string
  public_repos: number
  created_at: string
}

export async function fetchGithubPublicProfile(login: string): Promise<GithubUserPublic> {
  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(login)}`,
    { headers: githubHeaders(), ...nextFetch },
  )
  if (!res.ok) {
    throw new Error(`GitHub profile ${login}: HTTP ${res.status}`)
  }
  return res.json() as Promise<GithubUserPublic>
}

/** Sum stargazers across public repos for a user (paginated). */
export async function sumStargazersForUser(login: string): Promise<number> {
  let page = 1
  let total = 0
  const maxPages = 20

  while (page <= maxPages) {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(login)}/repos?per_page=100&page=${page}&sort=updated`,
      { headers: githubHeaders(), ...nextFetch },
    )
    if (!res.ok) break

    const repos = (await res.json()) as { stargazers_count?: number }[]
    if (!Array.isArray(repos) || repos.length === 0) break

    total += repos.reduce((s, r) => s + (r.stargazers_count ?? 0), 0)
    if (repos.length < 100) break
    page += 1
  }

  return total
}
