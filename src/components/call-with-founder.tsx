import { getCalApi } from '@calcom/embed-react'
import { useEffect, type ReactNode, type MouseEvent } from 'react'
import { Button, type ButtonProps, buttonStyles } from './button'

type ClickEvent = MouseEvent<HTMLButtonElement | HTMLAnchorElement>

type Props = Omit<ButtonProps, 'onClick'> & {
  children?: ReactNode
  href?: string
  onClick?: (event: ClickEvent) => void
}

export function CallWithFounder({ children, href, className, onClick, 'aria-label': ariaLabel, ...props }: Props) {
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

  function handleClick(event: ClickEvent) {
    if (typeof window !== 'undefined') {
      window.lintrk?.('track', { conversion_id: 23786426 })
    }

    onClick?.(event)
  }

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={buttonStyles({ className })}
        aria-label={ariaLabel}
        onClick={handleClick}>
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
      aria-label={ariaLabel}
      onClick={handleClick}
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
