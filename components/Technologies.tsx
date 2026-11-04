import { technologyGroups } from '@/data'
import { SectionHeader } from './ui/SectionHeader'
import { TechnologyIcon } from './ui/TechnologyIcon'

export default function Technologies() {
  return (
    <section id='technologies' aria-labelledby='technologies-heading' className='mx-auto max-w-6xl px-4 pt-14 md:px-8'>
      <SectionHeader
        id='technologies-heading'
        title='Technologies I work with'
        intro='The tools behind my AI systems, data pipelines, and applications.'
      />
      <div className='grid gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-7'>
        {technologyGroups.map(({ title, items }) => (
          <div key={title}>
            <h3 className='mb-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'>{title}</h3>
            <ul className='flex flex-wrap gap-2'>
              {items.map(({ name, icon, detail }) => (
                <li key={name} className='inline-flex min-h-8 items-center gap-2 rounded-lg border border-border bg-muted px-2.5 py-1 text-[13px] leading-snug text-foreground-secondary'>
                  {icon && <TechnologyIcon name={icon} size={15} />}
                  {name}
                  {detail && <span className='font-mono text-xs text-muted-foreground'>{detail}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
