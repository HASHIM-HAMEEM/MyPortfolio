'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { FaGlobe } from 'react-icons/fa6'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="fixed top-3 right-7 z-50 inline-flex items-center gap-1.5 pl-2 pr-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 portfolio-card portfolio-card-hover group"
      aria-label="Switch Language"
    >
      <FaGlobe className="h-3.5 w-3.5 shrink-0 accent-text group-hover:rotate-12 transition-transform duration-300" />
      <span className="leading-none">{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  )
}

export default LanguageSwitcher
