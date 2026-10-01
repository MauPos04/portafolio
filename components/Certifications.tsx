import { certifications, type Certification } from '@/data'
import { FaChevronDown } from 'react-icons/fa'
import { TechnologyIcon } from './ui/TechnologyIcon'

const CredentialCard = ({ certification }: { certification: Certification }) => (
  <article className='flex items-start gap-4 rounded-2xl border border-white/10 bg-[#04071D] p-5 transition hover:border-purple/50'>
    <div className='grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.025]'>
      <TechnologyIcon name={certification.icon} color={certification.color} />
    </div>
    <div className='min-w-0'>
      <p className='text-xs text-white-200/70'>{certification.issuer}</p>
      <h3 className='mt-1 text-sm font-semibold leading-6 text-white'>{certification.name}</h3>
      <p className='mt-2 text-xs text-purple'>{certification.date}</p>
      {certification.credentialUrl && <a href={certification.credentialUrl} target='_blank' rel='noopener noreferrer' className='mt-2 inline-block text-xs text-purple hover:underline'>View credential</a>}
    </div>
  </article>
)

const Certifications = () => {
  const featured = certifications.filter((certification) => certification.featured)
  const additional = certifications.filter((certification) => !certification.featured)
  return (
    <section className='mt-16 w-full' id='certifications' aria-labelledby='certifications-heading'>
      <h2 id='certifications-heading' className='text-center text-2xl font-bold text-white'>Certifications &amp; <span className='text-purple'>Learning</span></h2>
      <p className='mx-auto mb-8 mt-3 max-w-2xl text-center text-sm leading-6 text-white-200'>Cloud AI certifications and applied training in retrieval, agents, and deep learning.</p>
      <div className='grid gap-4 md:grid-cols-3'>
        {featured.map((certification) => <CredentialCard key={certification.id} certification={certification} />)}
      </div>
      <details className='group mt-5'>
        <summary className='flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#080b24] px-5 py-4 text-sm font-medium marker:hidden'>
          <span>More certifications &amp; courses <span className='ml-2 text-white-200/60'>({additional.length})</span></span>
          <FaChevronDown className='text-purple transition-transform group-open:rotate-180' aria-hidden='true' />
        </summary>
        <div className='mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {additional.map((certification) => <CredentialCard key={certification.id} certification={certification} />)}
        </div>
      </details>
    </section>
  )
}

export default Certifications
