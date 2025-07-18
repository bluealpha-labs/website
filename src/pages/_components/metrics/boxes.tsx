import { Google } from '#components/integrations/google.tsx'
import { LinkedIn } from '#components/integrations/linkedin.tsx'
import { Meta } from '#components/integrations/meta.tsx'
import { Snapchat } from '#components/integrations/snapchat.tsx'
import { TikTok } from '#components/integrations/tiktok.tsx'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Box } from './box'

const integrations = [
  { icon: Meta, position: { top: '10%', left: '15%' } },
  { icon: Google, position: { top: '18%', left: '35%' } },
  { icon: LinkedIn, position: { top: '15%', left: '65%' } },
  { icon: TikTok, position: { top: '25%', left: '85%' } },
  { icon: LinkedIn, position: { top: '80%', left: '30%' } },
  { icon: TikTok, position: { top: '85%', left: '70%' } },
  { icon: Snapchat, position: { top: '70%', left: '82%' } },
  { icon: Google, position: { top: '75%', left: '10%' } },
  { icon: Snapchat, position: { top: '40%', left: '8%' } },
  { icon: Meta, position: { top: '50%', left: '87%' } }
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
