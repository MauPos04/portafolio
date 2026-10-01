'use client'
import Image from 'next/image'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials, technologies } from '@/data'
import Certifications from './Certifications'
import { TechnologyIcon } from './ui/TechnologyIcon'

const Clients = () => (
  <section className='py-20' id='testimonials'>
    <h2 className='heading'>Kind words of <span className='text-purple'>satisfied Clients</span></h2>
    <div className='flex flex-col items-center max-lg:mt-10'>
      <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
      <Certifications />
      <section className='mt-12 w-full' aria-labelledby='technologies-heading'>
        <h2 id='technologies-heading' className='mb-3 text-center text-2xl font-bold'>Technologies <span className='text-purple'>I work with</span></h2>
        <p className='mb-8 text-center text-sm text-white-200'>The tools behind my AI systems, data pipelines, and applications.</p>
        <div className='flex flex-wrap items-stretch justify-center gap-4'>
          {technologies.map(({ id, name, description, icon, color }) => (
            <div key={id} className='flex w-[calc(50%-0.5rem)] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#04071D] px-4 py-5 transition hover:border-purple sm:w-[168px]' style={{ boxShadow: '0 0 16px 0 ' + color + '18' }}>
              <TechnologyIcon name={icon} color={color} />
              <span className='text-center text-xs font-semibold text-white'>{name}</span>
              <span className='text-center text-xs leading-5 text-white-200'>{description}</span>
            </div>
          ))}
          {companies.map(({ id, img, name, description, color }) => (
            <div key={'company-' + id} className='flex w-[calc(50%-0.5rem)] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#04071D] px-4 py-5 transition hover:border-purple sm:w-[168px]' style={{ boxShadow: '0 0 16px 0 ' + color + '18' }}>
              <Image src={img} alt='' width={28} height={28} className='h-7 w-7 object-contain' />
              <span className='text-center text-xs font-semibold text-white'>{name}</span>
              <span className='text-center text-xs leading-5 text-white-200'>{description}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  </section>
)

export default Clients
