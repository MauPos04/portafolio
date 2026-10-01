import Image from 'next/image'
import { FaArrowRight, FaChevronDown, FaLock } from 'react-icons/fa'
import {
  projects, projectsSectionAI, additionalAIProjects,
  projectsSectionTwo, projectsSectionThree, otherProjects,
  type PortfolioProject,
} from '@/data'
import { PinContainer } from './ui/3d-pin'
import { ProjectImageCarousel } from './ui/ProjectImageCarousel'
import { InlineSvg } from './ui/InlineSvg'

const iconNames: Record<string, string> = {
  '/icon_python.svg': 'Python', '/tensorflow.svg': 'TensorFlow',
  '/re.svg': 'React', '/ts.svg': 'TypeScript', '/next.svg': 'Next.js',
  '/openai.svg': 'OpenAI', '/ollama.svg': 'Ollama', '/openrouter.svg': 'OpenRouter',
  '/icons8-aws.svg': 'AWS', '/mongodb_svg.svg': 'MongoDB',
  '/wordpress_icon.svg': 'WordPress', '/elementor-icon.svg': 'Elementor',
  '/icon_excel.svg': 'Excel',
}

const ProjectCards = ({ items }: { items: PortfolioProject[] }) => (
  <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-8 py-4 mt-8'>
    {items.map((project) => {
      const link = project.link && project.link !== '#' ? project.link : undefined
      return (
        <article key={project.id} className='flex h-[35rem] w-[80vw] items-center justify-center sm:h-[43rem] sm:w-[570px]'>
          <PinContainer title={project.title}>
            <div className='w-[80vw] sm:w-[570px]'>
              <div className='relative mb-6 h-[30vh] min-h-[180px] overflow-hidden rounded-2xl bg-[#13162d] sm:h-[40vh] sm:min-h-[240px]'>
                <Image src='/bg.png' alt='' fill sizes='(max-width: 640px) 80vw, 570px' className='object-cover opacity-80' />
                <ProjectImageCarousel
                  images={project.images?.length ? project.images : [project.img]}
                  alt={project.title}
                  className='absolute inset-0 z-10'
                  imageClassName='object-contain object-center p-4'
                  autoPlay
                  intervalMs={5000}
                />
              </div>
              {project.badge && <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-purple sm:text-xs'>{project.badge}</p>}
              <h3 className='font-bold text-lg sm:text-2xl'>{project.title}</h3>
              <p className='mt-2 text-sm leading-6 text-white-200 sm:text-base'>{project.des}</p>
              {project.tags && (
                <ul aria-label={project.title + ' technologies'} className='mt-3 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => <li key={tag} className='rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white-200 sm:text-xs'>{tag}</li>)}
                </ul>
              )}
              <div className='mt-5 flex items-center justify-between gap-2'>
                <div className='flex items-center'>
                  {project.iconLists.map((icon, index) => (
                    <div key={icon} title={iconNames[icon]} className='flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black sm:h-10 sm:w-10' style={{ marginLeft: index === 0 ? 0 : -8 }}>
                      <InlineSvg src={icon} title={iconNames[icon] ?? 'Technology'} className='block h-full w-full p-2 text-white [&>svg]:block [&>svg]:h-full [&>svg]:w-full' />
                    </div>
                  ))}
                </div>
                {link ? (
                  <a href={link} target='_blank' rel='noopener noreferrer' className='flex shrink-0 items-center gap-2 text-xs font-medium text-purple hover:text-white sm:text-base' aria-label={(project.ctaLabel ?? 'View project') + ': ' + project.title}>
                    {project.ctaLabel ?? 'View project'} <FaArrowRight aria-hidden='true' />
                  </a>
                ) : (
                  <span className='flex items-center gap-1.5 text-xs text-white-200/60'>
                    {project.badge?.includes('Private') ? <><FaLock aria-hidden='true' /> Private project</> : 'Design concept'}
                  </span>
                )}
              </div>
            </div>
          </PinContainer>
        </article>
      )
    })}
  </div>
)

const DisclosureTitle = ({ title, count }: { title: string; count: number }) => (
  <summary className='flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#080b24] px-5 py-4 font-medium marker:hidden'>
    <span>{title} <span className='ml-2 text-sm text-white-200/60'>({count})</span></span>
    <FaChevronDown className='shrink-0 text-purple transition-transform group-open:rotate-180' aria-hidden='true' />
  </summary>
)

export const RecentProjects = () => (
  <section className='py-20' id='projects'>
    <p className='mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-purple'>Selected work</p>
    <h2 className='heading'>AI & Data Science <span className='text-purple'>Projects</span></h2>
    <p className='mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-white-200 sm:text-base'>
      Applied AI, forecasting, and retrieval systems built around real workflows, with evaluation and human oversight.
    </p>
    <ProjectCards items={projectsSectionAI} />
    <details className='group mt-6'>
      <DisclosureTitle title='Explore more AI projects' count={additionalAIProjects.length} />
      <ProjectCards items={additionalAIProjects} />
    </details>

    <div className='mt-20'>
      <h2 className='heading'>Web & Product <span className='text-purple'>Projects</span></h2>
      <p className='mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-white-200 sm:text-base'>Useful interfaces, connected services, and client work.</p>
      <ProjectCards items={projects} />
    </div>

    <details className='group mt-12'>
      <DisclosureTitle title='Design sketches & UI explorations' count={projectsSectionTwo.length + projectsSectionThree.length} />
      <p className='mt-6 text-center text-sm text-white-200'>Landing pages, menus, and pricing concepts from my design explorations.</p>
      <ProjectCards items={[...projectsSectionTwo, ...projectsSectionThree].map((project, index) => ({ ...project, id: index + 1 }))} />
    </details>

    <details className='group mt-5'>
      <DisclosureTitle title='Other projects & notebooks' count={otherProjects.length} />
      <ul className='mt-4 space-y-3 rounded-2xl border border-white/10 bg-[#080b24] p-5'>
        {otherProjects.map((project) => (
          <li key={project.id} className='flex items-center justify-between gap-4 rounded-lg p-2'>
            <span className='text-sm text-white-200'>{project.title}</span>
            {project.link && <a href={project.link} target='_blank' rel='noopener noreferrer' className='shrink-0 text-xs text-purple hover:underline' aria-label={'View ' + project.title}>View project</a>}
          </li>
        ))}
      </ul>
    </details>
  </section>
)



