import type { IconType } from 'react-icons'
import {
  SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiNvidia, SiMongodb,
  SiPython, SiReact, SiNextdotjs, SiTensorflow, SiPytorch,
  SiSnowflake, SiJira, SiConfluence, SiTypescript, SiDocker,
} from 'react-icons/si'

const icons: Record<string, IconType> = {
  aws: SiAmazonaws, azure: SiMicrosoftazure, google: SiGooglecloud,
  nvidia: SiNvidia, mongodb: SiMongodb, python: SiPython,
  react: SiReact, nextjs: SiNextdotjs, tensorflow: SiTensorflow,
  pytorch: SiPytorch, snowflake: SiSnowflake, jira: SiJira, confluence: SiConfluence,
  typescript: SiTypescript, docker: SiDocker,
}

// Monochrome brand icons: they inherit the text color (currentColor).
export function TechnologyIcon({ name, size = 16, className }: { name: string; size?: number; className?: string }) {
  if (name === 'vertex') {
    return (
      <span
        aria-hidden='true'
        className={`inline-block shrink-0 bg-current ${className ?? ''}`}
        style={{ width: size, height: size, mask: 'url(/vertex-ai.svg) center / contain no-repeat', WebkitMask: 'url(/vertex-ai.svg) center / contain no-repeat' }}
      />
    )
  }
  const Icon = icons[name]
  return Icon ? <Icon size={size} aria-hidden='true' className={`shrink-0 ${className ?? ''}`} /> : null
}
