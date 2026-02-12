"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Stat {
  label: string
  value: number
  suffix: string
  icon: React.ReactNode
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1800
          const steps = 60
          const stepValue = value / steps
          let current = 0
          const interval = setInterval(() => {
            current += stepValue
            if (current >= value) {
              setCount(value)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function CommunityImpact() {
  const { t } = useLanguage()

  const stats: Stat[] = [
    {
      label: t('impact.users') || 'Users Reached',
      value: 1000,
      suffix: '+',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128H9m6 0a5.972 5.972 0 00-.786-3.07M9 19.128v-.003c0-1.113.285-2.16.786-3.07m0 0a5.972 5.972 0 013.655-2.643 6 6 0 013.655 2.643M3 19.128a9.38 9.38 0 01-2.625.372A9.337 9.337 0 01-3.746 18.548a4.125 4.125 0 017.533-2.493" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: t('impact.apps') || 'Published Apps',
      value: 6,
      suffix: '',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      label: t('impact.projects') || 'Open Source Projects',
      value: 15,
      suffix: '+',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      label: t('impact.experience') || 'Years Building',
      value: 3,
      suffix: '+',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative rounded-xl border border-zinc-700/80 bg-[#121212] p-5 text-center transition-all duration-300 hover:border-[#64FFDA]/30 hover:shadow-lg hover:shadow-[#64FFDA]/5 overflow-hidden"
        >
          {/* Subtle gradient glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#64FFDA]/10 text-[#64FFDA] mb-3 group-hover:bg-[#64FFDA]/15 transition-colors">
              {stat.icon}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-[#E1E3E5] mb-1">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
