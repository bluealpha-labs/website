import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const iconStyles = tv({
  base: 'rounded-full bg-gray-100 p-1'
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
