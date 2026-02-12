"use client"

import { useEffect, useState } from "react"
import { Space_Mono } from "next/font/google"

const space_mono = Space_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const LocalTime = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null)
    const [timezone, setTimezone] = useState<string>("")

    useEffect(() => {
      const updateTime = () => {
        const now = new Date()
        setCurrentTime(now)
        setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
      }
      
      updateTime()
      const interval = setInterval(updateTime, 1000)
  
      return () => clearInterval(interval)
    }, [])
    
  return (
    <div className={`flex gap-1 md:gap-2 items-center text-[#64FFDA]/65 mx-7 my-3 ${space_mono.className} font-medium`} dir="ltr" style={{ position: 'fixed', top: '0.75rem', left: '1.75rem', right: 'auto' }}>
      <a 
        href="https://www.google.com/search?q=time" 
        target="_blank" 
        className="hover:text-[#64FFDA]/90 transition-all duration-100"
      >
        <span className="md:text-sm text-base">
          {currentTime ? currentTime.toLocaleString([],{ 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit",
            timeZone: timezone 
          }) : "--:--:--"}
        </span>
      </a>
      <span className={`hidden md:block text-sm ${space_mono.className}`}>
        {timezone ? ` (${timezone})` : ""}
      </span>
    </div>
  )
}

export default LocalTime