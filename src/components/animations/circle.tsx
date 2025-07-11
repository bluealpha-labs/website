import { cn } from '#utils/cn.ts'
import type { ComponentProps } from 'react'

export type CircleProps = ComponentProps<'div'>

export function Circle({ className, ...props }: CircleProps) {
  return (
    <div
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full bg-stone-100 text-stone-600',
        className
      )}
      {...props}
    />
  )
}
