import { Bing } from '#components/integrations/bing.tsx'
import { Google } from '#components/integrations/google.tsx'
import { Instagram } from '#components/integrations/instagram.tsx'
import { LinkedIn } from '#components/integrations/linkedin.tsx'
import { Meta } from '#components/integrations/meta.tsx'
import { Pinterest } from '#components/integrations/pinterest.tsx'
import { Reddit } from '#components/integrations/reddit.tsx'
import { Snapchat } from '#components/integrations/snapchat.tsx'
import { TikTok } from '#components/integrations/tiktok.tsx'
import { X } from '#components/integrations/x.tsx'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Box } from './box'

const integrations = [
  { icon: Google, position: { top: '10%', left: '15%' } },
  { icon: LinkedIn, position: { top: '18%', left: '35%' } },
  { icon: Meta, position: { top: '15%', left: '65%' } },
  { icon: Pinterest, position: { top: '25%', left: '85%' } },
  { icon: Reddit, position: { top: '80%', left: '30%' } },
  { icon: Snapchat, position: { top: '85%', left: '70%' } },
  { icon: TikTok, position: { top: '70%', left: '82%' } },
  { icon: X, position: { top: '75%', left: '10%' } },
  { icon: Bing, position: { top: '40%', left: '8%' } },
  { icon: Instagram, position: { top: '50%', left: '87%' } }
] as const

export function Boxes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <div
      ref={ref}
      className='pointer-events-none absolute inset-0'>
      {integrations.map(({ icon, position }, index) => (
        <Box
          key={index}
          index={index}
          isInView={isInView}
          icon={icon}
          position={position}
          className={index >= 8 ? 'hidden sm:flex' : ''}
        />
      ))}
    </div>
  )
}
