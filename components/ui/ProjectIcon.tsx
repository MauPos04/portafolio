import type { IconType } from 'react-icons'
import {
  SiAmazonaws, SiElementor, SiMicrosoftexcel, SiMongodb, SiNextdotjs,
  SiPython, SiReact, SiTensorflow, SiTypescript, SiWordpress,
} from 'react-icons/si'
import { InlineSvg } from './InlineSvg'

const brandIcons: Record<string, { Icon: IconType; name: string }> = {
  '/icon_python.svg': { Icon: SiPython, name: 'Python' },
  '/tensorflow.svg': { Icon: SiTensorflow, name: 'TensorFlow' },
  '/re.svg': { Icon: SiReact, name: 'React' },
  '/ts.svg': { Icon: SiTypescript, name: 'TypeScript' },
  '/next.svg': { Icon: SiNextdotjs, name: 'Next.js' },
  '/icons8-aws.svg': { Icon: SiAmazonaws, name: 'AWS' },
  '/mongodb_svg.svg': { Icon: SiMongodb, name: 'MongoDB' },
  '/wordpress_icon.svg': { Icon: SiWordpress, name: 'WordPress' },
  '/elementor-icon.svg': { Icon: SiElementor, name: 'Elementor' },
  '/icon_excel.svg': { Icon: SiMicrosoftexcel, name: 'Excel' },
}

// The AI provider icons keep their own SVGs (already drawn in currentColor).
const providerIcons: Record<string, string> = {
  '/openai.svg': 'OpenAI', '/ollama.svg': 'Ollama', '/openrouter.svg': 'OpenRouter',
}

export const projectIconName = (src: string) => brandIcons[src]?.name ?? providerIcons[src]

export function ProjectIcon({ src }: { src: string }) {
  const brand = brandIcons[src]
  if (brand) return <brand.Icon size={18} aria-hidden='true' />
  if (providerIcons[src]) return <InlineSvg src={src} className='block h-[18px] w-[18px] [&>svg]:h-full [&>svg]:w-full' />
  return null
}
