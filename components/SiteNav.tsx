'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/cn'

const tabs = [
  { href: '/', label: 'Overview' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
]

export function SiteNav({ className }: { className?: string }) {
  const pathname = usePathname()
  return (
    <nav aria-label='Primary' className={cn('-mx-4 grid grid-cols-3 border-t border-border md:mx-0 md:flex md:justify-center md:gap-8 md:border-t-0', className)}>
      {tabs.map(({ href, label }) => {
        const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'relative flex h-12 items-center justify-center text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground md:h-16',
              active && 'font-semibold text-foreground after:absolute after:inset-x-4 after:-bottom-px after:h-0.5 after:rounded-full after:bg-accent md:after:inset-x-0',
            )}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
