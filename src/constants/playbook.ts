export const tags = ['growth', 'saas'] as const
export type Tag = (typeof tags)[number]

export const tagNames = {
  growth: 'Growth',
  saas: 'SaaS'
} as const satisfies Record<Tag, string>

export const tagColors = {
  growth: 'green',
  saas: 'purple'
} as const satisfies Record<Tag, string>
