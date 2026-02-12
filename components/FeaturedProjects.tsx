"use client"

import React from 'react'
import { ProjectCard } from './ProjectCard'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getFeaturedProjects } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'

const FeaturedProjects = () => {
  const { language, t } = useLanguage()
  const featuredProjects = getFeaturedProjects()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-[#E1E3E5] mb-5">{t('projects.title')}</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants} whileHover="hover" whileTap={{ scale: 0.98 }}>
            <ProjectCard
              title={project.title[language]}
              description={project.description[language]}
              href={project.href}
              link={project.link}
              repoUrl={project.repoUrl}
              image={project.image}
              tags={project.tags}
              status={project.status}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="text-[#64FFDA] hover:text-[#64FFDA]/80 text-sm font-medium transition-colors"
        >
          {t('projects.viewAll')}
        </Link>
      </div>
    </div>
  )
}

export default FeaturedProjects
