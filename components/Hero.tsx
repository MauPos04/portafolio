import Link from 'next/link'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'
import { socialMedia } from '@/data'

const socialIcons: Record<string, JSX.Element> = {
  GitHub: <FaGithub aria-hidden='true' />,
  LinkedIn: <FaLinkedin aria-hidden='true' />,
}

// The h1 is the first node of the page so Next.js moves focus to it after navigation.
const Hero = () => {
  return (
    <>
      <h1 tabIndex={-1} className='relative z-10 mx-auto max-w-6xl px-4 pt-14 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:px-8 md:pt-20 md:text-5xl lg:text-[56px]'>
        Mauricio Posada Palma
      </h1>
      <div aria-hidden='true' className='pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-grid-white/[0.035] [-webkit-mask-image:radial-gradient(ellipse_60%_85%_at_18%_35%,#000_20%,transparent_72%)] [mask-image:radial-gradient(ellipse_60%_85%_at_18%_35%,#000_20%,transparent_72%)]' />
      <div className='relative z-10 mx-auto max-w-6xl px-4 pb-12 md:px-8 md:pb-14'>
        <p className='mt-3.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'>
          Applied AI · Software Engineering · Data Science
        </p>
        <p className='mt-6 text-[19px] font-medium leading-snug tracking-tight md:text-[22px]'>
          Applied AI, reliable software, measurable results
        </p>
        <p className='mt-2.5 max-w-[62ch] text-[17px] leading-relaxed text-foreground-secondary md:text-lg'>
          Hi, I&apos;m Mauricio. I build AI systems and software that turn information into useful products, from RAG workflows to machine learning platforms.
        </p>
        <p className='mt-4 font-mono text-[13px] text-muted-foreground'>AI &amp; Software Engineer at Grupo Bios · Based in Medellín, Colombia</p>
        <div className='mt-7 flex flex-wrap gap-3'>
          <Link href='/projects' className='inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-[18px] text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-primary/90'>
            Show my work <FaArrowRight aria-hidden='true' />
          </Link>
          {socialMedia.map(({ id, name, url }) => (
            <a key={id} href={url} target='_blank' rel='noopener noreferrer' className='inline-flex h-11 w-11 items-center justify-center gap-2 rounded-lg border border-input text-sm font-medium transition-colors duration-150 hover:border-foreground-secondary hover:bg-muted min-[480px]:w-auto min-[480px]:px-[18px]'>
              {socialIcons[name]}
              <span className='sr-only min-[480px]:not-sr-only'>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero
