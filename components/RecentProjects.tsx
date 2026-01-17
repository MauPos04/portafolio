import { projects, projectsSectionAI, projectsSectionTwo, projectsSectionThree, otherProjects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { ProjectImageCarousel } from './ui/ProjectImageCarousel'
import { InlineSvg } from './ui/InlineSvg'
import { FaLocationArrow } from 'react-icons/fa'


export const RecentProjects = () => {
  const sections = [
    {
      key: 'recent-1',
      lead: 'A small selection of',
      accent: 'Recent Projects',
      items: projects,
    },
    {
      key: 'recent-ai',
      lead: 'AI & Data Science',
      accent: 'Projects',
      items: projectsSectionAI,
    },
    {
      key: 'recent-2',
      lead: 'Concept Study',
      accent: 'Design Sketches',
      items: projectsSectionTwo,
    },
    {
      key: 'recent-3',
      lead: 'Interface Experiments',
      accent: 'UI Explorations',
      items: projectsSectionThree,
    },
  ]

  return (
    <div className='py-20' id='projects'>
      {sections.map((section, index) => {
        const HeadingTag = index === 0 ? 'h1' : 'h2'

        return (
          <div key={section.key} className={index === 0 ? '' : 'mt-20'}>
            <HeadingTag className='heading'>
              {section.lead}{' '}
              <span className='text-purple'>{section.accent}</span>
            </HeadingTag>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
              {section.items.map(({ id, title, des, img, iconLists, link, images
              }) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                  <PinContainer title={title} href={link}>
                    <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                      <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                        <img src="/bg.png" alt='bg-img' className='absolute inset-0 h-full w-full object-cover opacity-80' />
                        <ProjectImageCarousel
                          images={images?.length ? images : [img]}
                          alt={title}
                          className='absolute inset-0 z-10'
                          imageClassName='object-contain object-bottom p-4'
                          autoPlay
                          intervalMs={5000}
                        />
                      </div>
                    </div>
                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                      {title}
                    </h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                      {des}
                    </p>
                    <div className='flex items-center justify-between mt-7 mb-3'>
                      <div className='flex items-center'>
                        {iconLists.map((icon, index) => (
                          <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`
                            }}>
                            <InlineSvg src={icon} title={icon} className='block h-full w-full p-2 text-white [&>svg]:block [&>svg]:h-full [&>svg]:w-full' />
                          </div>
                        ))}

                      </div>
                      <div className='flex justify-center items-center '>
                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                          Check Code
                        </p>
                        <FaLocationArrow className='ms-3' color='#CBACF9' />
                      </div>

                    </div>

                  </PinContainer>
                </div>
              ))}

            </div>
          </div>
        )
      })}
      {/* Reduced-importance other projects list */}
      <div className='w-full mt-12 bg-slate-900 p-6 rounded-lg'>
        <h3 className='text-left text-lg font-semibold text-gray-200 mb-4'>Other Projects</h3>
        <ul className='space-y-3'>
          {otherProjects.map((proj) => (
            <li key={proj.id} className='flex justify-between items-center p-2 hover:bg-slate-800 rounded'>
              <span className='text-gray-300 italic'>- {proj.title}</span>
              {proj.link ? (
                <a
                  href={proj.link}
                  target='_blank'
                  rel='noopener noreferrer'
                    className='text-purple hover:underline text-sm font-medium'
                  >
                    Check Project
                </a>
              ) : (
                <span className='text-gray-500 text-xs'>No link available</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}



