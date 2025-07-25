import { cn } from '#utils/cn.ts'
import type { ComponentProps } from 'react'

export type RedditProps = ComponentProps<'svg'>

export const Reddit = ({ className, ...props }: RedditProps) => {
  return (
    <svg
      className={cn('size-6 fill-current stroke-current', className)}
      viewBox='0 0 24 24'
      {...props}>
      <path
        d='M7.28105 10.4442C6.87485 9.7934 6.14467 9.35938 5.31158 9.35938C4.03597 9.35938 3.00195 10.3767 3.00195 11.6317C3.00195 12.4831 3.47789 13.2251 4.18227 13.6143C3.98869 14.1127 3.8852 14.6379 3.8852 15.1805C3.8852 18.3955 7.51813 21.0017 11.9996 21.0017C16.481 21.0017 20.114 18.3955 20.114 15.1805C20.114 14.6379 20.0105 14.1127 19.8169 13.6143C20.5212 13.2251 20.9971 12.4831 20.9971 11.6317C20.9971 10.3767 19.9631 9.35938 18.6875 9.35938C17.8544 9.35938 17.1243 9.79339 16.7181 10.4442C15.3885 9.7613 13.7595 9.35938 11.9996 9.35938C10.2397 9.35938 8.61061 9.76131 7.28105 10.4442Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'></path>
      <path
        d='M18.1763 5.99318C19.0028 5.99318 19.6729 5.32313 19.6729 4.49659C19.6729 3.67005 19.0028 3 18.1763 3C17.3497 3 16.6797 3.67005 16.6797 4.49659C16.6797 5.32313 17.3497 5.99318 18.1763 5.99318Z'
        strokeWidth='1.5'></path>
      <path
        d='M12 9.35851L12.968 3.55068C13.0169 3.25718 13.3098 3.07114 13.5962 3.15163L16.7015 4.02421'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'></path>
      <path
        d='M14.9584 16.2617C14.1255 16.9108 13.1036 17.2931 11.9992 17.2931C10.8948 17.2931 9.87294 16.9108 9.04004 16.2617'
        strokeWidth='1.5'
        strokeLinecap='round'></path>
      <path
        d='M9.46976 13.0664H9.46191'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'></path>
      <path
        d='M14.543 13.0664H14.5352'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'></path>
    </svg>
  )
}
