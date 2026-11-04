export function SectionHeader({ id, title, intro, action }: {
  id: string
  title: string
  intro?: string
  action?: React.ReactNode
}) {
  return (
    <div className='mb-6'>
      <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2'>
        <h2 id={id} className='text-3xl font-semibold leading-tight tracking-tight md:text-4xl'>{title}</h2>
        {action}
      </div>
      {intro && <p className='mt-2.5 max-w-[62ch] text-base leading-relaxed text-foreground-secondary'>{intro}</p>}
    </div>
  )
}
