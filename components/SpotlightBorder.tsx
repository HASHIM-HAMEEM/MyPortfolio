"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface SpotlightBorderProps {
  children: React.ReactNode
  className?: string
}

export const SpotlightBorder = ({ children, className = "" }: SpotlightBorderProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className={className}>{children}</div>

  return (
    <div className={`relative ${className}`}>
      {/* Animated spotlight border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(90deg, transparent, rgb(var(--brand-rgb) / 0.7), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

interface AnimatedSpotlightProps {
  targets: string[]
  duration?: number
}

export const AnimatedSpotlight = ({ targets, duration = 2 }: AnimatedSpotlightProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % targets.length)
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [targets.length, duration])

  useEffect(() => {
    const element = document.querySelector(targets[currentIndex])
    if (element) {
      element.classList.add('spotlight-active')
      
      return () => {
        element.classList.remove('spotlight-active')
      }
    }
  }, [currentIndex, targets])

  return null
}
