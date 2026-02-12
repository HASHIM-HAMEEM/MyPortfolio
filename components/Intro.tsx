'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { useLanguage } from '@/contexts/LanguageContext'

const Intro = () => {
  const { t } = useLanguage()

  return (
    <div className="p-4">
      <Card className="border border-zinc-700/80 bg-[#121212] text-[#E1E3E5] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#64FFDA]/20">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Profile image: round, larger, subtle glow */}
            <div className="flex-shrink-0 relative">
              <div className="rounded-full p-1 ring-2 ring-[#64FFDA]/30 bg-[#1a1a1a] hover:ring-[#64FFDA]/50 transition-all duration-300">
                <Image
                  src="/projects/Proifile.jpeg"
                  width={160}
                  height={160}
                  className="rounded-full object-cover border-2 border-[#121212]"
                  alt="Hashim Hameem profile"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left min-w-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#64FFDA] tracking-tight">
                {t('intro.name')}
              </h1>
              <p className="text-zinc-400 text-lg mt-1">
                {t('intro.title')}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#64FFDA] border border-[#64FFDA]/40 rounded-full px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#64FFDA] animate-pulse" />
                  {t('intro.available')}
                </span>
              </div>
              <p className="mt-4 text-zinc-300 leading-relaxed max-w-xl">
                {t('intro.description')}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="https://github.com/HASHIM-HAMEEM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#64FFDA] transition-all p-2.5 rounded-lg hover:bg-[#64FFDA]/5 border border-transparent hover:border-[#64FFDA]/20"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://x.com/HashimScnz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#64FFDA] transition-all p-2.5 rounded-lg hover:bg-[#64FFDA]/5 border border-transparent hover:border-[#64FFDA]/20"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter size={20} />
                </a>
                <Link
                  href="mailto:hashimdar141@yahoo.com"
                  className="text-zinc-400 hover:text-[#64FFDA] transition-all p-2.5 rounded-lg hover:bg-[#64FFDA]/5 border border-transparent hover:border-[#64FFDA]/20"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Link>
                
                <div className="w-px h-6 bg-zinc-700/60 mx-1 hidden sm:block" />

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#64FFDA]/10 border border-[#64FFDA]/30 text-[#64FFDA] text-sm font-medium hover:bg-[#64FFDA]/20 hover:border-[#64FFDA]/50 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  {t('intro.resume') || 'Resume'}
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Intro
