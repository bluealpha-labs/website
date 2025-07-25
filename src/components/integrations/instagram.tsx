import { cn } from '#utils/cn.ts'
import type { ComponentProps } from 'react'

export type InstagramProps = ComponentProps<'svg'>

export const Instagram = ({ className, ...props }: InstagramProps) => {
  return (
    <svg
      className={cn('size-6 fill-current', className)}
      viewBox='0 0 24 25'
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.8446 10.0886C10.3266 10.0886 9.09155 11.3216 9.09155 12.8386C9.09155 14.3556 10.3266 15.5886 11.8446 15.5886C13.3626 15.5886 14.5966 14.3556 14.5966 12.8386C14.5966 11.3216 13.3626 10.0886 11.8446 10.0886Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.864 8.91779C16.294 8.91779 15.829 8.45579 15.829 7.88879C15.829 7.31979 16.294 6.85779 16.864 6.85779C17.434 6.85779 17.898 7.31979 17.898 7.88879C17.898 8.45579 17.434 8.91779 16.864 8.91779ZM11.844 17.0888C9.5 17.0888 7.592 15.1828 7.592 12.8388C7.592 10.4948 9.5 8.58879 11.844 8.58879C14.189 8.58879 16.096 10.4948 16.096 12.8388C16.096 15.1828 14.189 17.0888 11.844 17.0888ZM16.217 3.00879H7.782C4.623 3.00879 2.5 5.23079 2.5 8.53879V16.4788C2.5 19.7858 4.623 22.0088 7.782 22.0088H16.216C19.376 22.0088 21.5 19.7858 21.5 16.4788V8.53879C21.5 5.23079 19.377 3.00879 16.217 3.00879Z'
      />
    </svg>
  )
}
