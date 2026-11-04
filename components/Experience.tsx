import { workExperience } from '@/data'
import { SectionHeader } from './ui/SectionHeader'

const Experience = () => {
  return (
    <section id='work' aria-labelledby='work-heading' className='mx-auto max-w-6xl px-4 pt-14 md:px-8'>
      <SectionHeader id='work-heading' title='Work experience' />
      <ol className='border-t border-border'>
        {workExperience.map((job) => (
          <li key={job.id}>
            <article className='grid gap-1.5 border-b border-border py-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8'>
              <p className='font-mono text-[13px] text-muted-foreground'>{job.period}</p>
              <div>
                <h3 className='text-lg font-semibold leading-snug tracking-tight md:text-xl'>{job.title}</h3>
                <p className='mb-2 mt-1 text-[15px] font-medium text-foreground-secondary'>{job.role}</p>
                <p className='max-w-[68ch] text-[15px] leading-relaxed text-foreground-secondary'>{job.desc}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
