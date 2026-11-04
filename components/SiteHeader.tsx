import Link from 'next/link'
import { SiteNav } from './SiteNav'

// Mobile: the name row scrolls away and only the tab row stays fixed (negative top = name row height).
export default function SiteHeader() {
  return (
    <header className='sticky -top-[52px] z-40 border-b border-border bg-background md:top-0 [@media(max-height:500px)]:static'>
      <div className='mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 px-4 md:h-16 md:grid-cols-[auto_minmax(0,1fr)_auto] md:px-8'>
        <Link href='/' className='col-start-1 row-start-1 flex h-[52px] items-center whitespace-nowrap text-[15px] font-semibold tracking-tight md:h-auto'>
          Mauricio Posada Palma
        </Link>
        <SiteNav className='col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1' />
        <a href='#contact' className='col-start-2 row-start-1 inline-flex h-9 items-center rounded-lg border border-input px-3.5 text-[13px] font-medium transition-colors duration-150 hover:border-foreground-secondary hover:bg-muted md:col-start-3'>
          Contact
        </a>
      </div>
    </header>
  )
}
