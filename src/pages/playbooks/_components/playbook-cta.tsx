import { CallWithFounder } from '#components/call-with-founder.tsx'
import { Link } from '#components/link'
import { Fragment } from 'react'

type Props = {
  heading?: string
  body?: string
  linkHref?: string
  linkLabel?: string
  buttonLabelMobile?: string
  buttonLabelDesktop?: string
}

const DEFAULT_LINK = 'https://cal.com/team/bluealpha/call-with-bluealpha'

export function PlaybookCta({
  heading = 'Want this strategy executed flawlessly?',
  body = '{link} to let us apply this playbook to your company’s goals.',
  linkHref = DEFAULT_LINK,
  linkLabel = 'Book a 1:1 call',
  buttonLabelMobile = 'Strategy call',
  buttonLabelDesktop = 'Book a strategy call'
}: Props) {
  const segments = body.split('{link}')

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-[650] tracking-[-.01em]'>{heading}</h2>
      <p className='mt-2 text-base text-gray-700'>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1
          return (
            <Fragment key={index}>
              {segment}
              {!isLast && <Link href={linkHref}>{linkLabel}</Link>}
            </Fragment>
          )
        })}
      </p>
      <CallWithFounder aria-label='Book a strategy call' className='mx-auto mt-4'>
        <span className='sm:hidden'>{buttonLabelMobile}</span>
        <span className='hidden sm:inline'>{buttonLabelDesktop}</span>
      </CallWithFounder>
    </div>
  )
}
