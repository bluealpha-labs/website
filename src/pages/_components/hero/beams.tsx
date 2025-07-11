import { AnimatedBeam } from '#components/animations/animated-beam.tsx'
import { Circle } from '#components/animations/circle.tsx'
import { Google } from '#components/integrations/google.tsx'
import { LinkedIn } from '#components/integrations/linkedin.tsx'
import { Meta } from '#components/integrations/meta.tsx'
import { Snapchat } from '#components/integrations/snapchat.tsx'
import { TikTok } from '#components/integrations/tiktok.tsx'
import { Logo } from '#components/logo.tsx'
import { smoothTransition } from '#utils/transitions.ts'
import { UserIcon } from '@heroicons/react/16/solid'
import { motion } from 'motion/react'
import { useRef } from 'react'

export function Beams() {
  const ref = useRef<HTMLDivElement>(null)
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const ref4 = useRef<HTMLDivElement>(null)
  const ref5 = useRef<HTMLDivElement>(null)
  const ref6 = useRef<HTMLDivElement>(null)
  const ref7 = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      className='relative'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...smoothTransition, delay: 0.1 }}
      ref={ref}>
      <div className='flex flex-col gap-20'>
        <div className='flex justify-center gap-10'>
          <Circle ref={ref1}>
            <Google />
          </Circle>
          <Circle ref={ref2}>
            <LinkedIn />
          </Circle>
          <Circle ref={ref3}>
            <Meta />
          </Circle>
          <Circle ref={ref4}>
            <Snapchat />
          </Circle>
          <Circle ref={ref5}>
            <TikTok />
          </Circle>
        </div>
        <div className='flex justify-center'>
          <Circle
            ref={ref6}
            className='size-16'>
            <Logo />
          </Circle>
        </div>
        <div className='flex justify-center'>
          <Circle ref={ref7}>
            <UserIcon className='size-6' />
          </Circle>
        </div>
      </div>
      <AnimatedBeam
        containerRef={ref}
        fromRef={ref1}
        toRef={ref6}
      />
      <AnimatedBeam
        containerRef={ref}
        fromRef={ref2}
        toRef={ref6}
      />
      <AnimatedBeam
        containerRef={ref}
        fromRef={ref3}
        toRef={ref6}
      />
      <AnimatedBeam
        containerRef={ref}
        fromRef={ref4}
        toRef={ref6}
      />
      <AnimatedBeam
        containerRef={ref}
        fromRef={ref5}
        toRef={ref6}
      />
      <AnimatedBeam
        containerRef={ref}
        fromRef={ref6}
        toRef={ref7}
      />
    </motion.div>
  )
}
