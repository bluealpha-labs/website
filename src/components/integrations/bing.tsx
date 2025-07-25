import { cn } from '#utils/cn.ts'
import type { ComponentProps } from 'react'

export type BingProps = ComponentProps<'svg'>

export const Bing = ({ className, ...props }: BingProps) => {
  return (
    <svg
      className={cn('size-6 fill-current stroke-current', className)}
      viewBox='0 0 24 24'
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.69833 16.6491C9.36216 16.8172 8.96663 16.5727 8.96663 16.1969V4.26423C8.96663 4.03223 8.80873 3.83 8.58366 3.77374L5.55009 3.01534C5.23099 2.93557 4.92188 3.17692 4.92188 3.50584V18.7248C4.92188 18.9163 5.03007 19.0914 5.20136 19.177L8.74052 20.9466C8.88286 21.0178 9.0504 21.0178 9.19274 20.9466L18.799 16.1435C18.9703 16.0578 19.0785 15.8828 19.0785 15.6913V11.3292C19.0785 11.1034 18.9289 10.905 18.7118 10.843L12.8419 9.16591C12.4677 9.059 12.1181 9.39716 12.2125 9.77467L12.955 12.7446C12.9908 12.8878 13.0874 13.0082 13.2194 13.0742L15.0338 13.9814L9.69833 16.6491Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'></path>
    </svg>
  )
}
