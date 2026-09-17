'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { Download, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Intro = () => {
  const { t } = useLanguage()

  return (
    <div className="p-4">
      <Card className="portfolio-card portfolio-card-hover overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-9">
            <div className="flex-shrink-0 relative">
              <div className="rounded-full p-1 ring-1 ring-[rgb(var(--brand-rgb)/0.35)] bg-[var(--surface-muted)] transition-all duration-300">
                <Image
                  src="/profile-calligraphy.png"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-full object-cover border-2 border-[var(--surface)] bg-black"
                  alt="Hashim Hameem calligraphy emblem"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left min-w-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold accent-text tracking-normal">
                {t('intro.name')}
              </h1>
              <div className="mt-2 space-y-1 max-w-2xl mx-auto md:mx-0">
                <p className="text-lg md:text-xl font-medium text-foreground/90 tracking-tight leading-snug">
                  {t('intro.headline')}
                </p>
                <p className="text-soft text-base md:text-lg leading-relaxed">
                  {t('intro.subline')}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium accent-text accent-border border rounded-full px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)] animate-pulse" />
                  {t('intro.available')}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-theme border border-[var(--line)] rounded-full px-3 py-1">
                  {t('intro.location')}
                </span>
              </div>
              <p className="mt-4 text-soft leading-relaxed max-w-xl whitespace-pre-line">
                {t('intro.description')}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="https://github.com/HASHIM-HAMEEM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-theme hover:accent-text transition-all p-2.5 rounded-lg hover:bg-[rgb(var(--brand-rgb)/0.08)] border border-transparent hover:border-[rgb(var(--brand-rgb)/0.22)]"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://x.com/HashimScnz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-theme hover:accent-text transition-all p-2.5 rounded-lg hover:bg-[rgb(var(--brand-rgb)/0.08)] border border-transparent hover:border-[rgb(var(--brand-rgb)/0.22)]"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter size={20} />
                </a>
                <Link
                  href="mailto:hashimdar141@yahoo.com"
                  className="text-muted-theme hover:accent-text transition-all p-2.5 rounded-lg hover:bg-[rgb(var(--brand-rgb)/0.08)] border border-transparent hover:border-[rgb(var(--brand-rgb)/0.22)]"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                
                <div className="w-px h-6 bg-[var(--line-strong)] mx-1 hidden sm:block" />

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgb(var(--brand-rgb)/0.12)] border accent-border accent-text text-sm font-medium hover:bg-[rgb(var(--brand-rgb)/0.18)] transition-all duration-200 group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
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
