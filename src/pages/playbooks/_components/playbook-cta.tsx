import { CallWithFounder } from '#components/call-with-founder.tsx'
import { Link } from '#components/link'

export function PlaybookCta() {
  return (
    <div>
      <h2 className='text-2xl font-[650] tracking-[-.01em]'>Want this strategy executed flawlessly?</h2>
      <p className='mt-2 text-base text-gray-700'>
        <Link href='https://cal.com/team/bluealpha/call-with-bluealpha'>Book a 1:1 call</Link> to let us apply this playbook to your company’s goals.
      </p>
      <CallWithFounder aria-label='Book a strategy call' className='mx-auto mt-4'>
        <span className='sm:hidden'>Strategy call</span>
        <span className='hidden sm:inline'>Book a strategy call</span>
      </CallWithFounder>
    </div>
  )
}
