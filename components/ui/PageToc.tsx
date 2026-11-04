export function PageToc({ links }: { links: { href: string; label: string }[] }) {
  return (
    <nav aria-label='On this page' className='mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-1.5 px-4 pt-4 md:px-8'>
      {links.map(({ href, label }) => (
        <a key={href} href={href} className='py-1.5 font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground transition-colors duration-150 hover:text-foreground'>
          {label}
        </a>
      ))}
    </nav>
  )
}
