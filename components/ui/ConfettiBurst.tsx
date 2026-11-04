'use client'

import { useEffect, useRef, useState } from 'react'

type LottieComponent = typeof import('lottie-react').default
type Loaded = { Lottie: LottieComponent; data: object }

const MAX_MS = 2500

// Plays the original confetti Lottie once over its positioned parent.
// lottie-react and confetti.json are fetched with import() only when this
// component mounts, which happens on the first successful copy.
export function ConfettiBurst({ onDone }: { onDone: () => void }) {
  const [loaded, setLoaded] = useState<Loaded | null>(null)
  const doneRef = useRef(onDone)

  useEffect(() => {
    doneRef.current = onDone
  }, [onDone])

  useEffect(() => {
    let cancelled = false
    Promise.all([import('lottie-react'), import('../../data/confetti.json')])
      .then(([lottie, anim]) => {
        if (!cancelled) setLoaded({ Lottie: lottie.default, data: anim.default as object })
      })
      .catch(() => {
        if (!cancelled) doneRef.current()
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Hard cap once the animation is on screen, in case onComplete never fires.
  useEffect(() => {
    if (!loaded) return
    const timer = setTimeout(() => doneRef.current(), MAX_MS)
    return () => clearTimeout(timer)
  }, [loaded])

  if (!loaded) return null
  const { Lottie, data } = loaded

  return (
    // Same footprint as v0.2.0 at 1440 px: a 384 px square centred on the button,
    // its bottom edge 20 px below it, so the burst rises over the address.
    <div
      aria-hidden='true'
      className='pointer-events-none absolute -bottom-5 left-1/2 z-10 h-96 w-96 -translate-x-1/2'
    >
      <Lottie
        animationData={data}
        loop={false}
        autoplay
        onComplete={() => doneRef.current()}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
