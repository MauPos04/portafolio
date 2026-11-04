import Image from 'next/image'
import Link from 'next/link'
import { projectsSectionAI } from '@/data'
import { ArrowLink } from './ui/ArrowLink'
import { SectionHeader } from './ui/SectionHeader'

// Teasers only point at cards that are visible by default on /projects (not inside a closed <details>).
export default function SelectedWork() {
  return (
    <section aria-labelledby='selected-work' className='mx-auto max-w-6xl px-4 pt-14 md:px-8'>
      <SectionHeader id='selected-work' title='Selected work' action={<ArrowLink href='/projects'>View all projects</ArrowLink>} />
      <div className='grid gap-4 md:grid-cols-2'>
        {projectsSectionAI.map((project) => (
          <Link
            key={project.slug}
            href={`/projects#${project.slug}`}
            className='grid grid-cols-[104px_minmax(0,1fr)] items-start gap-4 rounded-xl border border-border bg-card p-3 transition-colors duration-150 hover:border-border-strong md:grid-cols-[168px_minmax(0,1fr)]'
          >
            <div className='relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted'>
              <Image src={project.img} alt='' fill sizes='168px' className='object-contain p-1.5' />
            </div>
            <div className='flex min-w-0 flex-col gap-1.5 pt-0.5'>
              {project.badge && <p className='font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'>{project.badge}</p>}
              <h3 className='text-base font-semibold leading-snug tracking-tight'>{project.title}</h3>
              <p className='hidden text-sm leading-relaxed text-foreground-secondary md:line-clamp-2'>{project.des}</p>
              {project.tags && (
                <ul className='mt-1 hidden flex-wrap gap-1.5 md:flex'>
                  {project.tags.slice(0, 3).map((tag) => (
                    <li key={tag} className='rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground'>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
