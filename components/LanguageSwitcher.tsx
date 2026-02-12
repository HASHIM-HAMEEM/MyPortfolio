'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { FaGlobe } from 'react-icons/fa6'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#64FFDA]/30 hover:border-[#64FFDA] text-[#E1E3E5] px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-[#64FFDA]/20 group"
      aria-label="Switch Language"
    >
      <FaGlobe className="text-[#64FFDA] group-hover:rotate-12 transition-transform duration-300" />
      <span className="pb-0.5">{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  )
}

export default LanguageSwitcher
