import { CallWithFounder } from '#components/call-with-founder.tsx'
import { Link } from '#components/link.tsx'
import { Logo } from '#components/logo.tsx'
import { $showCta } from '#stores/show-cta.tsx'
import { snappyTransition } from '#utils/transitions.ts'
import { useStore } from '@nanostores/react'
import { AnimatePresence } from 'motion/react'

export function DesktopNav() {
  const showCta = useStore($showCta)

  return (
    <div className='sticky top-0 z-50'>
      <nav className='absolute top-6 left-1/2 flex h-15 w-[calc(100%-3rem)] max-w-146 -translate-x-1/2 items-center gap-4 rounded-full bg-stone-200/50 px-4 py-2 backdrop-blur-xl sm:gap-4 sm:px-6 md:gap-6'>
        <div className='flex-1'>
          <a
            href='/'
            className='flex items-center gap-2'>
            <Logo />
            <span className='text-xl font-semibold tracking-[-.01em] select-none max-sm:hidden'>BlueAlpha</span>
          </a>
        </div>
        <Link href='/case-studies'>Case studies</Link>
        <Link href='/careers'>Careers</Link>
        <AnimatePresence mode='popLayout'>
          {showCta && (
            <CallWithFounder
              className='-me-2 px-3 py-2 text-sm sm:-me-3 sm:px-4 sm:py-2.5 sm:text-base'
              initial={{ y: 20, opacity: 0, transition: snappyTransition }}
              animate={{ y: 0, opacity: 1, transition: snappyTransition }}
              exit={{ y: 20, opacity: 0, transition: snappyTransition }}
            />
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
