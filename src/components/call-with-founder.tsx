import { getCalApi } from '@calcom/embed-react'
import { useEffect, type ReactNode } from 'react'
import { Button, type ButtonProps, buttonStyles } from './button'

type Props = ButtonProps & { children?: ReactNode; href?: string }

export function CallWithFounder({ children, href, className, ...props }: Props) {
  useEffect(() => {
    async function init() {
      const cal = await getCalApi({ namespace: 'call-with-founder' })
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: { light: { 'cal-brand': '#2563eb' }, dark: { 'cal-brand': '#2563eb' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    }

    init()
  }, [])

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonStyles({ className })}>
        {children ?? (
          <>
            <span className='sm:hidden'>Demo</span>
            <span className='hidden sm:inline'>Book a demo</span>
          </>
        )}
      </a>
    )
  }

  return (
    <Button
      data-cal-namespace='call-with-founder'
      data-cal-link='bluealpha/call-with-founder'
      data-cal-config='{"layout":"month_view"}'
      className={className}
      {...props}>
      {children ?? (
        <>
          <span className='sm:hidden'>Demo</span>
          <span className='hidden sm:inline'>Book a demo</span>
        </>
      )}
    </Button>
  )
}
