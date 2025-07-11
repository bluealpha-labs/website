import { Button } from '#components/button.tsx'
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
      <nav className='absolute top-6 left-1/2 h-15 w-146 -translate-x-1/2 items-center gap-6 rounded-full bg-stone-200/50 px-6 py-2 backdrop-blur-xl max-md:hidden md:flex'>
        <div className='flex-1'>
          <a
            href='/'
            className='flex items-center gap-2'>
            <Logo />
            <span className='text-xl font-semibold tracking-[-.01em]'>BlueAlpha</span>
          </a>
        </div>
        <Link href='/about'>About</Link>
        <Link href='/case-studies'>Case studies</Link>
        <AnimatePresence mode='popLayout'>
          {showCta && (
            <Button
              className='-me-3'
              initial={{ y: 20, opacity: 0, transition: snappyTransition }}
              animate={{ y: 0, opacity: 1, transition: snappyTransition }}
              exit={{ y: 20, opacity: 0, transition: snappyTransition }}>
              Call with founder
            </Button>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
