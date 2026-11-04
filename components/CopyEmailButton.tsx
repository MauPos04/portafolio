'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { ConfettiBurst } from '@/components/ui/ConfettiBurst'

// Selection-based copy for browsers that deny the async Clipboard API, such as
// embedded or in-app browsers ("Write permission denied"). It runs while the
// click still counts as a user gesture, so execCommand('copy') is allowed.
function copyWithSelection(text: string) {
  const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.setAttribute('aria-hidden', 'true')
  area.tabIndex = -1
  // Fixed at the top-left and 16px, so selecting it neither scrolls nor zooms on iOS.
  area.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;font-size:16px;pointer-events:none'
  document.body.appendChild(area)
  area.select()
  area.setSelectionRange(0, text.length)
  let copied = false
  try {
    copied = document.execCommand('copy')
  } catch {
    copied = false
  }
  area.remove()
  previous?.focus({ preventScroll: true })
  return copied
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Permission denied or document not focused: fall back to the selection copy.
    }
  }
  return copyWithSelection(text)
}

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const [burst, setBurst] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timer.current), [])

  const clearBurst = useCallback(() => setBurst(0), [])

  const copy = async () => {
    if (await copyText(email)) {
      setState('copied')
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setBurst((n) => n + 1)
      }
    } else {
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
