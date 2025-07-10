import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const iconStyles = tv({
  base: '-me-1.5 rounded-full bg-stone-100 p-1'
})

export type IconProps = ComponentProps<'div'> & VariantProps<typeof iconStyles>

export function Icon({ className, ...props }: IconProps) {
  return (
    <div
      className={iconStyles({ className })}
      {...props}
    />
  )
}
