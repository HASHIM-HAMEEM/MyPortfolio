"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

const Header = () => {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState('home')
  const { t } = useLanguage()

  useEffect(() => {
    // Set active based on current path
    if (pathname === '/') setActiveItem('home')
    else if (pathname === '/projects') setActiveItem('projects')
    else if (pathname === '/blogs') setActiveItem('blogs')
  }, [pathname])

  const navItems = [
    { name: t('nav.home'), path: '/', id: 'home' },
    { name: t('nav.projects'), path: '/projects', id: 'projects' },
    { name: t('nav.blogs'), path: '/blogs', id: 'blogs' }
  ]

  return (
    <nav className="px-1 py-2 mb-6 mt-4 md:mt-8">
      <div className="backdrop-blur-md rounded-full w-fit mx-auto portfolio-card">
        <div className="px-3 py-2">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <Link 
                  href={item.path}
                  className={`px-3 py-1.5 ${index > 0 ? 'ml-1 md:ml-2' : ''} rounded-full transition-all duration-200 text-sm md:text-base font-medium ${
                    activeItem === item.id 
                      ? 'bg-[rgb(var(--brand-rgb)/0.14)] accent-text' 
                      : 'text-muted-theme hover:text-[var(--text-primary)] hover:bg-[rgb(var(--brand-rgb)/0.08)]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header 
