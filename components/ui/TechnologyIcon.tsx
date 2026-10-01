import Image from 'next/image'
import type { IconType } from 'react-icons'
import {
  SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiNvidia, SiMongodb,
  SiPython, SiReact, SiNextdotjs, SiTensorflow, SiPytorch,
  SiSnowflake, SiJira, SiConfluence,
} from 'react-icons/si'

const icons: Record<string, IconType> = {
  aws: SiAmazonaws, azure: SiMicrosoftazure, google: SiGooglecloud,
  nvidia: SiNvidia, mongodb: SiMongodb, python: SiPython,
  react: SiReact, nextjs: SiNextdotjs, tensorflow: SiTensorflow,
  pytorch: SiPytorch, snowflake: SiSnowflake, jira: SiJira, confluence: SiConfluence,
}

export function TechnologyIcon({ name, color, size = 28 }: { name: string; color: string; size?: number }) {
  if (name === 'vertex') return <Image src='/vertex-ai.svg' width={size} height={size} alt='' />
  const Icon = icons[name]
  return Icon ? <Icon size={size} color={color} aria-hidden='true' /> : null
}
