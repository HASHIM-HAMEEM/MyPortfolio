"use client"

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const allSkills = [
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "AWS", logo: "/aws-svgrepo-com.svg" },
  { name: "Material Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-[#E1E3E5] mb-1">
        {t('skills.title')}
      </h2>
      <p className="text-zinc-400 text-sm mb-5">
        {t('skills.subtitle') || 'The tech arsenal behind my builds!'}
      </p>
      <div className="flex flex-wrap gap-3">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 py-2 px-3 rounded-lg bg-[#1a1a1a] border border-zinc-700/80 text-[#E1E3E5] text-sm font-medium transition-all duration-200 hover:border-[#64FFDA]/40 hover:scale-[1.02]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={skill.logo}
              alt=""
              className="w-5 h-5 object-contain flex-shrink-0"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
