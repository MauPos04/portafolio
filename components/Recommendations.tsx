import { testimonials } from '@/data'
import { SectionHeader } from './ui/SectionHeader'

// Static grid: no auto-scrolling marquee, nothing duplicated for screen readers.
export default function Recommendations() {
  return (
    <section id='recommendations' aria-labelledby='recommendations-heading' className='mx-auto max-w-6xl px-4 pt-14 md:px-8'>
      <SectionHeader id='recommendations-heading' title='Recommendations' />
      <div className='grid gap-5 md:grid-cols-2 md:gap-6'>
        {testimonials.map(({ quote, name, title }) => (
          <figure key={name} className='flex flex-col justify-between gap-4 rounded-xl border border-border bg-card p-5'>
            <blockquote className='text-[15px] leading-relaxed text-foreground-secondary'>{quote}</blockquote>
            <figcaption className='flex flex-col gap-0.5'>
              <span className='text-[15px] font-semibold'>{name}</span>
              <span className='font-mono text-[13px] text-muted-foreground'>{title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
