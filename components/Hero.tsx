import React from 'react'
import { Spotlight } from './ui/Spotlights'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div id='top' className='relative pb-20 pt-36'>
      <div className='pointer-events-none absolute top-0 left-1/2 h-full w-screen max-w-none -translate-x-1/2 overflow-hidden'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>

        <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Applied AI · Software Engineering · Data Science
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Applied AI, reliable software, measurable results'
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Mauricio. I build AI systems and software that turn information into useful products, from RAG workflows to machine learning platforms.
          </p>
          <p className='mb-6 text-center text-xs tracking-wide text-purple md:text-sm'>AI &amp; Software Engineer at Grupo Bios · Based in Medellín, Colombia</p>
          <a href='#projects'>
            <MagicButton 
              title="Show my work"
              icon = {<FaLocationArrow />}
              position = 'right'
            />

          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
