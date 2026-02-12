"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const TAG_ICONS: Record<string, string> = {
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
  'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
}

interface Props {
  title: string
  href?: string
  description: string
  tags?: string[]
  link?: string
  repoUrl?: string
  image?: string
  status?: 'Running' | 'In Development' | 'Open Source'
  links?: readonly {
    icon: React.ReactNode
    type: string
    href: string
  }[]
  className?: string
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  repoUrl,
  image,
  status = 'Running',
  links,
  className,
}: Props) {
  const displayLink = link || href

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running':
        return 'bg-emerald-500'
      case 'In Development':
        return 'bg-amber-500'
      case 'Open Source':
        return 'bg-blue-500'
      default:
        return 'bg-zinc-500'
    }
  }

  return (
    <Card className={cn(
      "flex flex-col overflow-hidden border border-zinc-700/80 bg-[#121212] text-[#E1E3E5] shadow-lg",
      "transition-all duration-300 ease-out h-full relative",
      "hover:shadow-xl hover:shadow-[#64FFDA]/10 hover:border-[#64FFDA]/30",
      className
    )}>
      {image && (
        <Link href={href || "#"} className="block w-full overflow-hidden rounded-t-xl">
          <div className="relative h-44 w-full overflow-hidden bg-[#1a1a1a] transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={image}
              alt={title}
              width={600}
              height={260}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Link>
      )}

      <CardHeader className="px-5 pt-4 pb-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <CardTitle className="text-lg font-bold text-[#E1E3E5] leading-tight pr-2">
            <Link href={href || "#"} className="hover:text-[#64FFDA] transition-colors">
              {title}
            </Link>
          </CardTitle>
          <div className="flex items-center gap-2 flex-shrink-0">
            {displayLink && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={displayLink}
                className="text-zinc-400 hover:text-[#64FFDA] transition-colors p-1"
                aria-label={`Visit ${title}`}
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
            {repoUrl && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={repoUrl}
                className="text-zinc-400 hover:text-[#64FFDA] transition-colors p-1"
                aria-label={`${title} GitHub repo`}
              >
                <FaGithub size={16} />
              </a>
            )}
          </div>
        </div>
        <div className="text-sm text-zinc-300 leading-relaxed mt-1">
          {description}
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
            <span className={cn("h-1.5 w-1.5 rounded-full", getStatusColor(status))} />
            {status}
          </span>
        </div>
      </CardHeader>

      <CardContent className="px-5 pt-0 flex-1">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
                  const iconUrl = TAG_ICONS[tag]
              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#1F1F1F] border border-zinc-700/80 text-[10px] font-medium text-zinc-300"
                >
                  {iconUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={iconUrl} alt="" className="w-3.5 h-3.5 object-contain" />
                  ) : null}
                  <span>{tag}</span>
                </span>
              )
            })}
          </div>
        )}
      </CardContent>

      {links && links.length > 0 && (
        <CardFooter className="px-5 pb-4 pt-0 flex flex-wrap gap-2">
          {links.map((linkItem, idx) => (
            <Link
              href={linkItem.href}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#64FFDA] hover:underline"
            >
              {linkItem.icon}
              {linkItem.type}
            </Link>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}
