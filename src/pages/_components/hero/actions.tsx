import { Button } from '#components/button.tsx'
import { CallWithFounder } from '#components/call-with-founder.tsx'
import { Icon } from '#components/icon.tsx'
import { $showCta } from '#stores/show-cta.tsx'
import { ArrowDownIcon } from '@heroicons/react/16/solid'
import { useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

export function Actions() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  useEffect(() => {
    $showCta.set(!inView)
    return () => $showCta.set(false)
  }, [inView])

  function scrollToNextSection() {
    const currentSection = ref.current?.closest('section')
    const nextSection = currentSection?.nextElementSibling
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={ref}
      className='flex gap-3'>
      <CallWithFounder href='https://cal.com/team/bluealpha/call-with-bluealpha' />
      <Button
        variant='outline'
        onClick={scrollToNextSection}>
        Learn more
        <Icon className='-me-1.5'>
          <ArrowDownIcon className='size-4' />
        </Icon>
      </Button>
    </div>
  )
}
