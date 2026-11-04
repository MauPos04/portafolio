import { certifications, type Certification } from '@/data'
import { Disclosure } from './ui/Disclosure'
import { SectionHeader } from './ui/SectionHeader'
import { TechnologyIcon } from './ui/TechnologyIcon'

const CredentialCard = ({ certification }: { certification: Certification }) => (
  <article className='grid grid-cols-[44px_minmax(0,1fr)] items-start gap-3.5 rounded-xl border border-border bg-card p-[18px]'>
    <div className='grid h-11 w-11 place-items-center rounded-[10px] border border-border bg-muted text-foreground-secondary'>
      <TechnologyIcon name={certification.icon} size={20} />
    </div>
    <div className='min-w-0'>
      <p className='font-mono text-[13px] text-muted-foreground'>{certification.issuer}</p>
      <h3 className='mb-1.5 mt-0.5 text-[15px] font-semibold leading-snug'>{certification.name}</h3>
      <p className='font-mono text-[13px] text-muted-foreground'>{certification.date}</p>
      {certification.credentialUrl && (
        <a href={certification.credentialUrl} target='_blank' rel='noopener noreferrer' className='mt-2 inline-block text-[13px] text-accent underline underline-offset-4 hover:text-accent-hover'>
          View credential
        </a>
      )}
    </div>
  </article>
)

const Certifications = () => {
  const featured = certifications.filter((certification) => certification.featured)
  const additional = certifications.filter((certification) => !certification.featured)
  return (
    <section id='certifications' aria-labelledby='certifications-heading' className='mx-auto max-w-6xl px-4 pt-14 md:px-8'>
      <SectionHeader
        id='certifications-heading'
        title='Certifications & Learning'
        intro='Cloud AI certifications and applied training in retrieval, agents, and deep learning.'
      />
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {featured.map((certification) => <CredentialCard key={certification.id} certification={certification} />)}
      </div>
      <Disclosure title='More certifications & courses' count={additional.length}>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {additional.map((certification) => <CredentialCard key={certification.id} certification={certification} />)}
        </div>
      </Disclosure>
    </section>
  )
}

export default Certifications
