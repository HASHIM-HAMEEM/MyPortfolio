"use client"

import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useLanguage } from '@/contexts/LanguageContext'

const GITHUB_USERNAME = 'HASHIM-HAMEEM'

export default function GitHubActivitySection() {
  const { t } = useLanguage()

  return (
    <section className="py-6">
      <div className="rounded-xl border border-zinc-700/80 bg-[#121212] p-5 md:p-6 overflow-hidden shadow-lg hover:border-[#64FFDA]/30 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <h2 className="text-xl font-bold text-[#E1E3E5] flex items-center gap-2">
            <span className="text-[#64FFDA]">❖</span>
            {t('devCorner.githubActivity') || 'GitHub Activity'}
          </h2>
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 font-mono bg-zinc-800/50 px-3 py-1 rounded hover:text-[#64FFDA] transition-colors"
          >
            @{GITHUB_USERNAME}
          </a>
        </div>
        
        <div className="flex justify-center w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          <div className="min-w-fit">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme="dark"
              fontSize={12}
              blockSize={11}
              blockMargin={4}
              theme={{
                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
