'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Links to the old single-page anchors (e.g. /#projects) keep working after the move to routes.
const legacyHashes: Record<string, string> = {
  '#projects': '/projects',
  '#experience': '/experience',
  '#certifications': '/experience#certifications',
  '#testimonials': '/experience#recommendations',
}

export function LegacyHashRedirect() {
  const router = useRouter()
  useEffect(() => {
    const redirect = () => {
      const target = legacyHashes[window.location.hash]
      if (target) router.replace(target)
    }
    redirect()
    window.addEventListener('hashchange', redirect)
    return () => window.removeEventListener('hashchange', redirect)
  }, [router])
  return null
}
