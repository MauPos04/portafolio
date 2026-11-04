import { certifications, overviewStack, workExperience } from '@/data'
import { ArrowLink } from './ui/ArrowLink'
import { TechnologyIcon } from './ui/TechnologyIcon'

const labelClass = 'font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'
const cardClass = 'flex flex-col gap-3 rounded-xl border border-border bg-card p-5'

// Overview strip: what a recruiter needs before scrolling (current role, credentials, stack).
export default function Glance() {
  const current = workExperience[0]
  const featured = certifications.filter((certification) => certification.featured)

  return (
    <div className='mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-8'>
      <section aria-labelledby='glance-current' className={cardClass}>
        <h2 id='glance-current' className={labelClass}>Currently</h2>
        <p className='text-[17px] font-semibold leading-snug tracking-tight'>{current.title}</p>
        <p className='font-mono text-[13px] text-muted-foreground'>{current.role} · {current.period}</p>
        <p className='text-sm leading-relaxed text-foreground-secondary'>{current.desc}</p>
        <ArrowLink href='/experience#work' className='mt-auto pt-1'>Experience</ArrowLink>
      </section>
      <section aria-labelledby='glance-certified' className={cardClass}>
        <h2 id='glance-certified' className={labelClass}>Certified</h2>
        <ul className='flex flex-col gap-3'>
          {featured.map(({ id, name, issuer, date, icon }) => (
            <li key={id} className='grid grid-cols-[18px_minmax(0,1fr)] gap-2.5'>
              <TechnologyIcon name={icon} size={16} className='mt-[3px] text-foreground-secondary' />
              <span>
                <span className='block text-sm font-medium leading-snug'>{name}</span>
                <span className='font-mono text-xs text-muted-foreground'>{issuer} · {date}</span>
              </span>
            </li>
          ))}
        </ul>
        <ArrowLink href='/experience#certifications' className='mt-auto pt-1'>All certifications</ArrowLink>
      </section>
      <section aria-labelledby='glance-stack' className={cardClass}>
        <h2 id='glance-stack' className={labelClass}>Stack</h2>
        <ul className='flex flex-wrap gap-2'>
          {overviewStack.map(({ name, icon }) => (
            <li key={name} className='inline-flex min-h-8 items-center gap-2 rounded-lg border border-border bg-muted px-2.5 text-[13px] text-foreground-secondary'>
              {icon && <TechnologyIcon name={icon} size={15} />}
              {name}
            </li>
          ))}
        </ul>
        <ArrowLink href='/experience#technologies' className='mt-auto pt-1'>All technologies</ArrowLink>
      </section>
    </div>
  )
}
