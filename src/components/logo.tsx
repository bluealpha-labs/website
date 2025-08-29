import { cx } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

export type LogoProps = ComponentProps<'svg'>

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      viewBox='0 0 48 48'
      className={cx('size-6 fill-blue-600', className)}
      {...props}>
      <title>BlueAlpha</title>
      <path d='M24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24 0C37.2548 0 48 10.7452 48 24V42C48 45.3137 45.3137 48 42 48C40.3797 48 38.91 47.3575 37.8308 46.3135C36.9657 45.4766 35.6271 45.0338 34.5462 45.5635C31.363 47.1236 27.784 48 24 48C10.7452 48 0 37.2548 0 24V6C0 2.68629 2.68629 0 6 0C7.61995 0 9.0892 0.642336 10.1682 1.68601C11.0333 2.52279 12.3717 2.96541 13.4525 2.43578C16.636 0.875765 20.2157 0 24 0ZM24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12Z'
      />
    </svg>
  )
}
