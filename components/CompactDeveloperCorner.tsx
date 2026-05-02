"use client"

import React, { useEffect, useMemo, useState } from 'react'
import AggregatedGitHubCalendar from '@/components/AggregatedGitHubCalendar'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  GITHUB_CONTRIBUTION_USERNAMES,
  GITHUB_PRIMARY_USERNAME,
  GITHUB_TENURE_YEARS_PUBLIC,
} from '@/config/github'
import {
  type GithubStatsPayload,
  formatCompactCount,
} from '@/lib/github-stats-payload'

const CompactDeveloperCorner = () => {
  const { t } = useLanguage()
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

  const stats = [
    {
      labelKey: 'devCorner.repos',
      value: liveStats ? formatCompactCount(liveStats.totalRepos) : '—',
      icon: '📁',
    },
    {
      labelKey: 'devCorner.stars',
      value: liveStats ? formatCompactCount(liveStats.totalStars) : '—',
      icon: '⭐',
    },
    {
      labelKey: 'devCorner.contributions',
      value: liveStats
        ? formatCompactCount(liveStats.contributionsLastYear)
        : '—',
      icon: '💻',
    },
    {
      labelKey: 'devCorner.packages',
      value: liveStats
        ? formatCompactCount(liveStats.publishedPackageCount)
        : '—',
      icon: '📦',
    },
  ]

  const featuredPackages = [
    {
      packageId: 'flutter_welcome_kit',
      name: 'Flutter Welcome Kit',
      description: 'Onboarding & tour guide kit for Flutter apps',
      pubUrl: 'https://pub.dev/packages/flutter_welcome_kit',
    },
    {
      packageId: 'islamic_kit',
      name: 'Islamic Kit',
      description: 'Prayer times, Qibla compass & Islamic tools',
      pubUrl: 'https://pub.dev/packages/islamic_kit',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.03, 
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.02, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header with Gradient */}
      <motion.div 
        className="mb-10"
        variants={itemVariants}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#64FFDA]/20 via-transparent to-[#64FFDA]/20 blur-xl"></div>
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 bg-[#1a1a1a] border border-zinc-700 rounded-2xl">
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#64FFDA] via-[#4dd4b4] to-[#64FFDA] bg-clip-text text-transparent mb-2"
                style={{ backgroundSize: '200% 200%' }}
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                {t('devCorner.title')}
              </motion.h2>
              <p className="text-zinc-400 text-lg">{t('devCorner.subtitle')}</p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-sm text-zinc-500 mb-1">{t('devCorner.githubActivity')}</div>
              <div className="text-xl font-bold text-[#64FFDA]">@{GITHUB_PRIMARY_USERNAME}</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid with Glow Effect */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        variants={itemVariants}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardHoverVariants}
            className="relative group"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/20 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              variants={pulseVariants}
              animate="animate"
            ></motion.div>
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-xl border border-zinc-700 group-hover:border-[#64FFDA] transition-all duration-300 text-center overflow-hidden">
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-[#64FFDA]/5 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="text-4xl mb-3 relative z-10"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-2xl font-bold text-[#64FFDA] mb-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-zinc-400 uppercase tracking-wider">{t(stat.labelKey)}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Two Column Layout */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12"
        variants={itemVariants}
      >
        {/* Left Column - GitHub Calendar */}
        <motion.div 
          className="relative group"
          variants={cardHoverVariants}
          initial="rest"
          whileHover="hover"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            variants={pulseVariants}
            animate="animate"
          ></motion.div>
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 md:p-8 rounded-2xl border border-zinc-700 group-hover:border-[#64FFDA]/50 transition-all duration-300 overflow-hidden">
            <motion.div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-[#64FFDA]/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.h3 
              className="text-2xl font-bold text-[#64FFDA] mb-6 flex items-center gap-2 relative z-10"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📊
              </motion.span>
              {t('devCorner.contributionCalendar')}
            </motion.h3>
          <div className="flex justify-center">
            <AggregatedGitHubCalendar
              usernames={GITHUB_CONTRIBUTION_USERNAMES}
              colorScheme="dark"
              fontSize={10}
              blockSize={10}
              blockMargin={2}
              theme={{
                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              preloaded={calendarPreload}
              waitForPreload={!statsApiFailed}
            />
          </div>
          </div>
        </motion.div>

        {/* Right Column - Published Packages */}
        <motion.div 
          className="relative group"
          variants={cardHoverVariants}
          initial="rest"
          whileHover="hover"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            variants={pulseVariants}
            animate="animate"
          ></motion.div>
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 md:p-8 rounded-2xl border border-zinc-700 group-hover:border-[#64FFDA]/50 transition-all duration-300 overflow-hidden">
            <motion.div 
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#64FFDA]/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.h3 
              className="text-2xl font-bold text-[#64FFDA] mb-6 flex items-center gap-2 relative z-10"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📦
              </motion.span>
              {t('devCorner.publishedPackages')}
            </motion.h3>
          <div className="space-y-4">
            {featuredPackages.map((pkg, index) => (
              <motion.div 
                key={index}
                className="relative group/pkg"
                whileHover={{ scale: 1.03, x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#64FFDA]/20 to-transparent rounded-lg blur opacity-0 group-hover/pkg:opacity-100 transition-opacity duration-300"
                  animate={{ x: [-100, 100, -100] }}
                  transition={{ duration: 5, repeat: Infinity }}
                ></motion.div>
                <div className="relative bg-[#121212] p-5 rounded-lg border border-zinc-700 group-hover/pkg:border-[#64FFDA] transition-all duration-300 overflow-hidden">
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 bg-[#64FFDA]/5 rounded-full blur-xl"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-white text-lg">{pkg.name}</h4>
                    <motion.a 
                      href={pkg.pubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs bg-[#64FFDA]/20 text-[#64FFDA] px-3 py-1.5 rounded-md hover:bg-[#64FFDA] hover:text-black transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('devCorner.view')} →
                    </motion.a>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">{pkg.description}</p>
                  <div className="flex gap-6 text-sm">
                    <span className="text-[#64FFDA] font-semibold">
                      ↓{' '}
                      {liveStats
                        ? `${formatCompactCount(
                            liveStats.pubScores[pkg.packageId]
                              ?.downloadCount30Days ?? 0,
                          )} · 30d`
                        : '—'}
                    </span>
                    <span className="text-zinc-400">
                      ❤{' '}
                      {liveStats
                        ? formatCompactCount(
                            liveStats.pubScores[pkg.packageId]?.likeCount ?? 0,
                          )
                        : '—'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Community Impact */}
      <motion.div 
        className="relative group"
        variants={itemVariants}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/20 via-transparent to-[#64FFDA]/20 rounded-2xl blur-2xl opacity-50"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-10 rounded-2xl border border-zinc-700 group-hover:border-[#64FFDA]/50 transition-all duration-500 overflow-hidden">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.h3 
            className="text-3xl font-bold text-center bg-gradient-to-r from-[#64FFDA] via-[#4dd4b4] to-[#64FFDA] bg-clip-text text-transparent mb-8 relative z-10"
            style={{ backgroundSize: '200% 200%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {t('devCorner.communityImpact')}
          </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div 
            className="relative text-center p-6 bg-[#121212] rounded-xl border border-zinc-800 hover:border-[#64FFDA] transition-all duration-300 overflow-hidden group/impact"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/10 to-transparent opacity-0 group-hover/impact:opacity-100 transition-opacity duration-300"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="text-4xl font-bold text-[#64FFDA] mb-2 relative z-10"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ['0 0 0px #64FFDA', '0 0 20px #64FFDA', '0 0 0px #64FFDA']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {liveStats
                ? formatCompactCount(liveStats.pubDownloads30DaysTotal)
                : '—'}
            </motion.div>
            <div className="text-sm text-zinc-400 uppercase tracking-wider relative z-10">{t('devCorner.totalUsers')}</div>
          </motion.div>
          <motion.div 
            className="relative text-center p-6 bg-[#121212] rounded-xl border border-zinc-800 hover:border-[#64FFDA] transition-all duration-300 overflow-hidden group/impact"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/10 to-transparent opacity-0 group-hover/impact:opacity-100 transition-opacity duration-300"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 0.3 }}
            />
            <motion.div 
              className="text-4xl font-bold text-[#64FFDA] mb-2 relative z-10"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ['0 0 0px #64FFDA', '0 0 20px #64FFDA', '0 0 0px #64FFDA']
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              {liveStats
                ? String(liveStats.publishedStoreAppsCount)
                : '—'}
            </motion.div>
            <div className="text-sm text-zinc-400 uppercase tracking-wider relative z-10">{t('devCorner.publishedApps')}</div>
          </motion.div>
          <motion.div 
            className="relative text-center p-6 bg-[#121212] rounded-xl border border-zinc-800 hover:border-[#64FFDA] transition-all duration-300 overflow-hidden group/impact"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/10 to-transparent opacity-0 group-hover/impact:opacity-100 transition-opacity duration-300"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 0.6 }}
            />
            <motion.div 
              className="text-4xl font-bold text-[#64FFDA] mb-2 relative z-10"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ['0 0 0px #64FFDA', '0 0 20px #64FFDA', '0 0 0px #64FFDA']
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              {String(GITHUB_TENURE_YEARS_PUBLIC)}
            </motion.div>
            <div className="text-sm text-zinc-400 uppercase tracking-wider relative z-10">{t('devCorner.yearsExperience')}</div>
          </motion.div>
        </div>
        <div className="mt-8 text-center">
          <motion.a 
            href={`https://github.com/${GITHUB_PRIMARY_USERNAME}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#64FFDA]/10 border-2 border-[#64FFDA] text-[#64FFDA] rounded-xl hover:bg-[#64FFDA] hover:text-black transition-all duration-300 font-bold text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{t('devCorner.viewGithub')}</span>
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </motion.svg>
          </motion.a>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompactDeveloperCorner;
