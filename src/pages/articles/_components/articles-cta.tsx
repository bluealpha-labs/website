import { CallWithFounder } from '#components/call-with-founder.tsx'
import { Link } from '#components/link'

export function ArticlesCta() {
  return (
    <div>
      <h2 className='text-2xl font-[650] tracking-[-.01em]'>Ready to Unlock Your Growth Potential?</h2>
      <p className='mt-2 text-base text-gray-700'>
        <Link href='https://cal.com/team/bluealpha/call-with-bluealpha'>Book a 1:1 call</Link> to get tailored advice, playbook walkthroughs, or a second set of eyes on your growth plan.
      </p>
      <CallWithFounder className='mx-auto mt-4' />
    </div>
  )
}
