import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { Button, type ButtonProps } from './button'

export function CallWithFounder(props: ButtonProps) {
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

  return (
    <Button
      data-cal-namespace='call-with-founder'
      data-cal-link='bluealpha/call-with-founder'
      data-cal-config='{"layout":"month_view"}'
      {...props}>
      Book a demo
    </Button>
  )
}
