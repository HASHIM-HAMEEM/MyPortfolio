'use client'

import React from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'

const Projects = () => {
  const { language, t } = useLanguage()
  
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-[#E1E3E5] mb-5">{t('projects.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title[language]}
            description={project.description[language]}
            href={project.href}
            link={project.link}
            repoUrl={project.repoUrl}
            image={project.image}
            tags={project.tags}
            status={project.status}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects