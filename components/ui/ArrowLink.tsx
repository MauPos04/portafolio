import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { cn } from '@/utils/cn'

const linkClass = 'inline-flex min-h-6 items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 transition-colors duration-150 hover:text-accent-hover hover:underline'

// Accent is reserved for interactive text: links, focus and the active tab.
export function ArrowLink({ href, children, className, external, label }: {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  label?: string
}) {
  const content = <>{children} <FaArrowRight aria-hidden='true' className='text-xs' /></>
  if (external) {
    return <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label} className={cn(linkClass, className)}>{content}</a>
  }
  return <Link href={href} aria-label={label} className={cn(linkClass, className)}>{content}</Link>
}
