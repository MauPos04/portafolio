import {
  projects, projectsSectionAI, additionalAIProjects,
  projectsSectionTwo, projectsSectionThree, otherProjects,
} from '@/data'
import { ProjectCard } from './ProjectCard'
import { ArrowLink } from './ui/ArrowLink'
import { Disclosure } from './ui/Disclosure'
import { PageToc } from './ui/PageToc'
import { SectionHeader } from './ui/SectionHeader'

const twoColumns = '(min-width: 768px) 540px, 100vw'
const threeColumns = '(min-width: 1024px) 360px, (min-width: 768px) 540px, 100vw'
const concepts = [...projectsSectionTwo, ...projectsSectionThree]

export default function ProjectsSections() {
  return (
    <>
      <PageToc
        links={[
          { href: '#ai', label: 'AI & Data Science' },
          { href: '#web', label: 'Web & Product' },
          { href: '#design', label: 'Design sketches' },
          { href: '#other', label: 'Other projects' },
        ]}
      />

      <section id='ai' aria-labelledby='ai-heading' className='mx-auto max-w-6xl px-4 pt-14 md:px-8'>
        <SectionHeader
          id='ai-heading'
          title='AI & Data Science Projects'
          intro='Applied AI, forecasting, and retrieval systems built around real workflows, with evaluation and human oversight.'
        />
        <div className='grid gap-5 md:grid-cols-2 md:gap-6'>
          {projectsSectionAI.map((project) => <ProjectCard key={project.slug} project={project} sizes={twoColumns} />)}
        </div>
        <Disclosure title='Explore more AI projects' count={additionalAIProjects.length}>
          <div className='grid gap-5 md:grid-cols-2 md:gap-6'>
            {additionalAIProjects.map((project) => <ProjectCard key={project.slug} project={project} sizes={twoColumns} />)}
          </div>
        </Disclosure>
      </section>

      <section id='web' aria-labelledby='web-heading' className='mx-auto max-w-6xl px-4 pt-14 md:px-8'>
        <SectionHeader id='web-heading' title='Web & Product Projects' intro='Useful interfaces, connected services, and client work.' />
        <div className='grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          {projects.map((project) => <ProjectCard key={project.slug} project={project} sizes={threeColumns} />)}
        </div>
      </section>

      <section id='design' aria-labelledby='design-heading' className='mx-auto max-w-6xl px-4 pt-14 md:px-8'>
        <Disclosure title='Design sketches & UI explorations' count={concepts.length} headingId='design-heading'>
          <p className='mb-4 text-sm text-foreground-secondary'>Landing pages, menus, and pricing concepts from my design explorations.</p>
          <div className='grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
            {concepts.map((project) => <ProjectCard key={project.title} project={project} sizes={threeColumns} concept />)}
          </div>
        </Disclosure>
      </section>

      <section id='other' aria-labelledby='other-heading' className='mx-auto max-w-6xl px-4 md:px-8'>
        <Disclosure title='Other projects & notebooks' count={otherProjects.length} headingId='other-heading'>
          <ul className='border-t border-border'>
            {otherProjects.map((project) => (
              <li key={project.id} className='flex items-center justify-between gap-4 border-b border-border py-3.5 text-[15px] text-foreground-secondary'>
                <span>{project.title}</span>
                {project.link && <ArrowLink href={project.link} external label={`View project: ${project.title}`}>View project</ArrowLink>}
              </li>
            ))}
          </ul>
        </Disclosure>
      </section>
    </>
  )
}
