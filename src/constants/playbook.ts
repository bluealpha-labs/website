import type { BadgeProps } from '#components/badge.tsx'

export const tags = ['growth', 'saas', 'mmm'] as const
export type Tag = (typeof tags)[number]

export const tagNames = {
  growth: 'Growth',
  saas: 'SaaS',
  mmm: 'Marketing Mix Modeling'
} as const satisfies Record<Tag, string>

export const tagColors = {
  growth: 'moss',
  saas: 'orangeDark',
  mmm: 'indigo'
} as const satisfies Record<Tag, BadgeProps['color']>
