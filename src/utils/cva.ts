import { defineConfig } from 'cva'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: { theme: { text: ['display-xs', 'display-sm', 'display-md', 'display-lg', 'display-xl', 'display-2xl'] } }
})

export const { compose, cva, cx } = defineConfig({ hooks: { onComplete: twMerge } })
