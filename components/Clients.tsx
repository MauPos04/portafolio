'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials, certifications } from '@/data'
import { SiNvidia, SiGooglecloud, SiAmazonaws, SiSnowflake, SiJira, SiConfluence } from "react-icons/si";
import { MdCloud } from "react-icons/md";

const iconMap: Record<string, React.ReactNode> = {
  "NVIDIA Certified": <SiNvidia size={28} color="#76b900" />,
  "Google Cloud": <SiGooglecloud size={28} color="#4285F4" />,
  "AWS": <SiAmazonaws size={28} color="#FF9900" />,
  "Snowflake": <SiSnowflake size={28} color="#29B5E8" />,
  "Vertex AI": <MdCloud size={28} color="#4285F4" />,
  "Jira": <SiJira size={28} color="#0052CC" />,
  "Confluence": <SiConfluence size={28} color="#0052CC" />,
};

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        Kind words of
        <span className='text-purple'> satisfied Clients</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>

        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />

        {/* Certifications & Technologies */}
        <h2 className='text-2xl font-bold text-white mt-16 mb-8 text-center'>
          Certifications &amp; <span className='text-purple'>Technologies</span>
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-6 max-lg:mt-4'>
          {certifications.map(({ id, name, description, color }) => (
            <div
              key={id}
              className='flex flex-col items-center gap-2 px-6 py-5 rounded-2xl border border-white/[0.1] bg-[#04071D] hover:border-purple transition duration-300 min-w-[120px]'
              style={{ boxShadow: `0 0 16px 0 ${color}22` }}
            >
              <div>{iconMap[name]}</div>
              <span className='text-white font-semibold text-xs text-center'>{name}</span>
              <span className='text-[#C1C2D3] text-xs text-center'>{description}</span>
            </div>
          ))}
          {companies.map(({ id, img, name, description, color }) => (
            <div
              key={`company-${id}`}
              className='flex flex-col items-center gap-2 px-6 py-5 rounded-2xl border border-white/[0.1] bg-[#04071D] hover:border-purple transition duration-300 min-w-[120px]'
              style={{ boxShadow: `0 0 16px 0 ${color}22` }}
            >
              <img src={img} alt={name} className='w-7 h-7 object-contain' />
              <span className='text-white font-semibold text-xs text-center'>{name}</span>
              <span className='text-[#C1C2D3] text-xs text-center'>{description}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Clients
