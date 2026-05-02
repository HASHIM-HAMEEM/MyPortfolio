/**
 * Primary handle shown in the UI; links go to this profile.
 * All usernames listed here are merged for the contribution calendar total and heatmap.
 */
export const GITHUB_PRIMARY_USERNAME = 'HASHIM-HAMEEM'

export const GITHUB_CONTRIBUTION_USERNAMES = [
  GITHUB_PRIMARY_USERNAME,
  'scnz313',
  'scnz141',
  'azharapp01-collab',
  'usmanbhat',
] as const

/** Shown where you state GitHub tenure (Community Impact, Developer Corner). */
export const GITHUB_TENURE_YEARS_PUBLIC = 4

/** Published packages to pull live like/download stats from pub.dev (see /api/github-stats). */
export const PUB_DEV_PACKAGE_NAMES = ['flutter_welcome_kit', 'islamic_kit'] as const
