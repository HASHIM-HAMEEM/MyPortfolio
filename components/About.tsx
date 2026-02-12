'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <>
        <h2 className="text-2xl font-bold text-[#E1E3E5] my-4 mb-5">{t('about.title')}</h2>
        <p className="text-[#E1E3E5] leading-relaxed tracking-normal">{t('about.description1')}</p>
        <br />
        <p className="text-[#E1E3E5] leading-relaxed tracking-normal">{t('about.description2')}</p>
        <br />
        <p className="text-[#E1E3E5] leading-relaxed tracking-normal">{t('about.description3')}</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1F1F1F] p-4 rounded-lg border border-[#2A2A2A]">
            <div className="text-3xl font-bold text-[#64FFDA]">40+</div>
            <div className="text-sm text-zinc-400 mt-1">{t('about.projects')}</div>
          </div>
          <div className="bg-[#1F1F1F] p-4 rounded-lg border border-[#2A2A2A]">
            <div className="text-3xl font-bold text-[#64FFDA]">3+</div>
            <div className="text-sm text-zinc-400 mt-1">{t('about.yearsExperience')}</div>
          </div>
          <div className="bg-[#1F1F1F] p-4 rounded-lg border border-[#2A2A2A]">
            <div className="text-3xl font-bold text-[#64FFDA]">15+</div>
            <div className="text-sm text-zinc-400 mt-1">{t('about.technologies')}</div>
          </div>
        </div>
        <div className="mt-6 bg-[#1F1F1F] p-4 rounded-lg border border-[#2A2A2A]">
          <div className="text-sm text-zinc-400 mb-2">{t('about.education')}</div>
          <div className="text-[#E1E3E5] font-semibold">{t('about.degree')}</div>
          <div className="text-sm text-zinc-400">{t('about.university')}</div>
        </div>
    </>
  )
}

export default About