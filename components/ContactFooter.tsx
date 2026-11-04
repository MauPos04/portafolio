import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { contactEmail, socialMedia } from '@/data'
import { CopyEmailButton } from './CopyEmailButton'

const socialIcons: Record<string, JSX.Element> = {
  GitHub: <FaGithub aria-hidden='true' />,
  LinkedIn: <FaLinkedin aria-hidden='true' />,
}

const version = process.env.NEXT_PUBLIC_APP_VERSION
const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE
const commit = process.env.NEXT_PUBLIC_COMMIT_SHA
const buildKind = process.env.NEXT_PUBLIC_BUILD_KIND

const buildLabel = [
  `v${version}`,
  `built ${buildDate}`,
  commit ? commit : 'commit unknown',
  buildKind === 'local' ? 'local build' : buildKind === 'local-dirty' ? 'local build with uncommitted changes' : null,
].filter(Boolean).join(' · ')

export default function ContactFooter() {
  return (
    <footer id='contact' className='mt-20 border-t border-border' aria-labelledby='contact-heading'>
      <div className='mx-auto max-w-6xl px-4 pb-7 pt-12 md:px-8'>
        <div className='grid gap-6 md:grid-cols-2 md:items-start'>
          <h2 id='contact-heading' className='text-3xl font-semibold tracking-tight md:text-4xl'>Contact</h2>
          <div>
            <p className='mb-3 break-all font-mono text-base'>{contactEmail}</p>
            <div className='flex flex-wrap gap-2.5'>
              <CopyEmailButton email={contactEmail} />
              <a href={`mailto:${contactEmail}`} className='inline-flex h-9 items-center gap-2 rounded-lg border border-input px-3.5 text-[13px] font-medium transition-colors duration-150 hover:border-foreground-secondary hover:bg-muted'>
                <FaEnvelope aria-hidden='true' />
                Send email
              </a>
            </div>
            <ul className='mt-4 flex flex-wrap gap-2.5'>
              {socialMedia.map(({ id, name, url }) => (
                <li key={id}>
                  <a href={url} target='_blank' rel='noopener noreferrer' className='inline-flex h-9 items-center gap-2 rounded-lg border border-border-strong px-3 text-[13px] text-foreground-secondary transition-colors duration-150 hover:border-foreground-secondary hover:text-foreground'>
                    {socialIcons[name]}
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-[13px] text-muted-foreground'>
          <p>© {buildDate?.slice(0, 4)} Mauricio Posada Palma</p>
          <details>
            <summary className='cursor-pointer font-mono text-xs'>Build</summary>
            <p className='mt-1.5 font-mono text-xs'>{buildLabel}</p>
          </details>
        </div>
      </div>
    </footer>
  )
}
