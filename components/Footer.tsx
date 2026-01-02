import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative w-full pt-10 pb-10' id='contact'>
        <div className='pointer-events-none absolute left-1/2 bottom-0 h-96 w-screen max-w-none -translate-x-1/2 overflow-hidden'>
            <img
            src='/footer-grid.svg'
            alt='grid'
            className='h-full w-full object-cover opacity-50'
            />
        </div>

        <div className='relative z-10 flex flex-col items-center'>
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>

            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how can I help you achieve your goals</p>

            <a href="mailto:mauriciop1palma@gmail.com" className="">
                <MagicButton
                title="Let&apos;s get in touch"
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>
        <div className='relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Mauricio</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile)=> 
                <Link key={profile.id} href={profile.url} legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <img src={profile.img} alt={String(profile.id)} width={20} height={20} />
                        </div>
                    </a>
                </Link>
                )}
            </div>
        </div>

    </footer>
  )
}

export default Footer