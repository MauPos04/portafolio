import Image from 'next/image'
import { FaLock } from 'react-icons/fa'
import type { PortfolioProject } from '@/data'
import { cn } from '@/utils/cn'
import { ArrowLink } from './ui/ArrowLink'
import { PinCard } from './ui/PinCard'
import { ProjectIcon, projectIconName } from './ui/ProjectIcon'
import { ProjectImageCarousel } from './ui/ProjectImageCarousel'

// Sober card; on fine pointers PinCard adds the v0.2.0 "goes backwards" 3D hover (CSS only).
export function ProjectCard({ project, sizes, concept = false }: {
  project: PortfolioProject
  sizes: string
  concept?: boolean
}) {
  const images = project.images?.length ? project.images : [project.img]
  const link = project.link && project.link !== '#' ? project.link : undefined
  const iconNames = project.iconLists.map(projectIconName).filter(Boolean)

  return (
    <PinCard id={project.slug} title={project.title}>
    <article className='flex flex-1 flex-col rounded-xl border border-border bg-card p-3 transition-colors duration-150 hover:border-border-strong'>
      <div className={cn('relative overflow-hidden rounded-lg border border-border bg-muted', concept ? 'aspect-[16/10]' : 'aspect-video')}>
        {images.length > 1 ? (
          <ProjectImageCarousel images={images} title={project.title} sizes={sizes} />
        ) : (
          <Image src={images[0]} alt={`${project.title} preview`} fill sizes={sizes} className='object-contain p-2.5' />
        )}
      </div>
      <div className={cn('flex flex-1 flex-col px-2 pb-1.5', concept ? 'gap-1.5 pt-3' : 'gap-2.5 pt-4')}>
        {project.badge && <p className='font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'>{project.badge}</p>}
        <h3 className='text-lg font-semibold leading-snug tracking-tight md:text-xl'>{project.title}</h3>
        <p className={cn('leading-relaxed text-foreground-secondary', concept ? 'text-sm' : 'text-[15px]')}>{project.des}</p>
        {project.tags && (
          <ul aria-label='Technologies' className='flex flex-wrap gap-1.5'>
            {project.tags.map((tag) => (
              <li key={tag} className='rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground'>{tag}</li>
            ))}
          </ul>
        )}
        {concept ? (
          <p className='mt-auto pt-1 font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'>Design concept</p>
        ) : (
          <div className='mt-auto flex items-center justify-between gap-3 pt-2'>
            {iconNames.length > 0 ? (
              <span role='img' aria-label={`Built with ${iconNames.join(', ')}`} className='flex items-center gap-3 text-foreground-secondary'>
                {project.iconLists.map((icon) => <ProjectIcon key={icon} src={icon} />)}
              </span>
            ) : <span />}
            {link ? (
              <ArrowLink href={link} external label={`${project.ctaLabel ?? 'View project'}: ${project.title}`}>
                {project.ctaLabel ?? 'View project'}
              </ArrowLink>
            ) : project.badge?.includes('Private') ? (
              <span className='inline-flex items-center gap-1.5 text-[13px] text-muted-foreground'>
                <FaLock aria-hidden='true' className='text-xs' /> Private project
              </span>
            ) : null}
          </div>
        )}
      </div>
    </article>
    </PinCard>
  )
}
