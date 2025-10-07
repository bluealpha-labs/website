import { CallWithFounder } from '#components/call-with-founder.tsx'
import { Link } from '#components/link.tsx'
import { Logo } from '#components/logo.tsx'
import { $showCta } from '#stores/show-cta.tsx'
import { snappyTransition } from '#utils/transitions.ts'
import { useStore } from '@nanostores/react'
import { AnimatePresence } from 'motion/react'

type Props = { isHome: boolean }

export function DesktopNav({ isHome }: Props) {
  const showCta = useStore($showCta)

  return (
    <div className='sticky top-0 z-50'>
      <nav className='absolute top-6 left-1/2 flex h-15 w-[calc(100%-3rem)] max-w-200 -translate-x-1/2 items-center gap-4 rounded-full bg-gray-200/50 px-4 py-2 backdrop-blur-xl sm:gap-4 sm:px-6 md:gap-6'>
        <div className='flex-1'>
          <a
            href='/'
            className='flex items-center gap-2'>
            <Logo />
            <span className='text-xl font-semibold tracking-[-.01em] select-none max-sm:hidden'>BlueAlpha</span>
          </a>
        </div>
        <Link
          className='max-sm:text-sm'
          href='/case-studies'>
          Case studies
        </Link>
        <Link
          className='max-sm:hidden'
          href='/playbooks'>
          Playbooks
        </Link>
        <Link
          className='max-sm:hidden'
          href='/articles'>
          Articles
        </Link>
        <Link
          className='max-sm:text-sm'
          href='/careers'>
          Careers
        </Link>
        {!isHome ? (
          <CallWithFounder
            href='https://cal.com/team/bluealpha/call-with-bluealpha'
            className='-me-2 px-3 py-2 text-sm sm:-me-3 sm:px-4 sm:py-2.5 sm:text-base'
            aria-label='Book a demo'
          />
        ) : (
          <AnimatePresence mode='popLayout'>
            {showCta && (
              <CallWithFounder
                href='https://cal.com/team/bluealpha/call-with-bluealpha'
                className='-me-2 px-3 py-2 text-sm sm:-me-3 sm:px-4 sm:py-2.5 sm:text-base'
                initial={{ y: 20, opacity: 0, transition: snappyTransition }}
                animate={{ y: 0, opacity: 1, transition: snappyTransition }}
                exit={{ y: 20, opacity: 0, transition: snappyTransition }}
              />
            )}
          </AnimatePresence>
        )}
      </nav>
    </div>
  )
}
