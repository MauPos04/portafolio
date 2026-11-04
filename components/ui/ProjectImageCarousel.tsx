'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Manual carousel: no autoplay; inactive slides are hidden from view and from assistive technology.
export function ProjectImageCarousel({ images, title, sizes, imageClassName }: {
  images: string[]
  title: string
  sizes: string
  imageClassName?: string
}) {
  const [index, setIndex] = useState(0)
  const go = (next: number) => setIndex((next + images.length) % images.length)

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${title}, image ${i + 1} of ${images.length}`}
          fill
          sizes={sizes}
          hidden={i !== index}
          className={imageClassName ?? 'object-contain p-2.5'}
        />
      ))}
      <div className='absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-border-strong bg-background/90 px-1 py-0.5'>
        <button type='button' onClick={() => go(index - 1)} aria-label='Previous image' className='grid size-7 place-items-center rounded-full text-foreground-secondary transition-colors duration-150 hover:text-foreground'>
          <FaChevronLeft aria-hidden='true' className='text-[11px]' />
        </button>
        {images.map((src, i) => (
          <button
            key={src}
            type='button'
            onClick={() => setIndex(i)}
            aria-label={`Image ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className='grid size-7 place-items-center rounded-full before:size-[7px] before:rounded-full before:bg-input aria-[current=true]:before:bg-foreground'
          />
        ))}
        <button type='button' onClick={() => go(index + 1)} aria-label='Next image' className='grid size-7 place-items-center rounded-full text-foreground-secondary transition-colors duration-150 hover:text-foreground'>
          <FaChevronRight aria-hidden='true' className='text-[11px]' />
        </button>
      </div>
    </>
  )
}
