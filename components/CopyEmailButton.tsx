'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { ConfettiBurst } from '@/components/ui/ConfettiBurst'

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const [burst, setBurst] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timer.current), [])

  const clearBurst = useCallback(() => setBurst(0), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setState('copied')
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setBurst((n) => n + 1)
      }
    } catch {
      setState('failed')
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setState('idle'), 2500)
  }

  return (
    <>
      <span className='relative inline-flex'>
        <button
          type='button'
          onClick={copy}
          className='inline-flex h-9 items-center gap-2 rounded-lg border border-input px-3.5 text-[13px] font-medium transition-colors duration-150 hover:border-foreground-secondary hover:bg-muted'
        >
          <FaRegCopy aria-hidden='true' />
          {state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy email'}
        </button>
        {burst > 0 && <ConfettiBurst key={burst} onDone={clearBurst} />}
      </span>
      <span className='sr-only' aria-live='polite'>
        {state === 'copied' ? 'Email address copied.' : state === 'failed' ? "Couldn't copy. Select the address instead." : ''}
      </span>
    </>
  )
}
