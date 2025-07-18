import { cn } from '#utils/cn.ts'
import type { ComponentProps } from 'react'

export type XProps = ComponentProps<'svg'>

export const X = ({ className, ...props }: XProps) => {
  return (
    <svg
      className={cn('size-6 fill-current stroke-current', className)}
      viewBox='0 0 24 24'
      {...props}>
      <path
        d='M9.59954 4.802C9.41841 4.53493 9.11668 4.375 8.79398 4.375H5.14783C4.83544 4.375 4.65025 4.72438 4.8256 4.9829L14.4897 19.2312C14.6708 19.4983 14.9725 19.6582 15.2952 19.6582H18.9414C19.2538 19.6582 19.439 19.3088 19.2636 19.0503L9.59954 4.802Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'></path>
      <path
        d='M10.4499 13.4333L4.66895 20'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'></path>
      <path
        d='M18.7571 4L13.3203 10.1756'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'></path>
    </svg>
  )
}
