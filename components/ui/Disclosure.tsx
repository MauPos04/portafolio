import { FaChevronDown } from 'react-icons/fa'

// Native <details>: keyboard accessible without JavaScript. When the disclosure is a section on its own,
// its heading sits outside <summary> (visually hidden) so screen readers keep it in the heading outline.
export function Disclosure({ title, count, headingId, children }: {
  title: string
  count: number
  headingId?: string
  children: React.ReactNode
}) {
  return (
    <>
      {headingId && <h2 id={headingId} className='sr-only'>{title}</h2>}
      <details className='group mt-6 rounded-xl border border-border-strong bg-card'>
        <summary className='flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 font-medium'>
          <span>
            {title}
            <span className='ml-2 font-normal text-muted-foreground'>({count})</span>
          </span>
          <FaChevronDown aria-hidden='true' className='shrink-0 text-xs text-muted-foreground transition-transform duration-200 group-open:rotate-180' />
        </summary>
        <div className='px-5 pb-5'>{children}</div>
      </details>
    </>
  )
}
