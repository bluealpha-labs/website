import type { BadgeProps } from '#components/badge.tsx'

export const tags = [
  'agencies',
  'ai',
  'budget',
  'channels',
  'creative',
  'incrementality',
  'leadership',
  'measurement',
  'mmm',
  'privacy',
  'tools'
] as const
export type Tag = (typeof tags)[number]

export const tagNames = {
  agencies: 'Agencies',
  ai: 'AI & ML',
  budget: 'Budget',
  channels: 'Channels',
  creative: 'Creative',
  incrementality: 'Incrementality',
  leadership: 'Leadership',
  measurement: 'Measurement',
  mmm: 'Marketing Mix Modeling',
  privacy: 'Privacy',
  tools: 'Tools & Platforms'
} as const satisfies Record<Tag, string>

export const tagColors = {
  agencies: 'fuchsia',
  ai: 'yellow',
  budget: 'rose',
  channels: 'blueDark',
  creative: 'purple',
  incrementality: 'blue',
  leadership: 'moss',
  measurement: 'cyan',
  mmm: 'indigo',
  privacy: 'teal',
  tools: 'orange'
} as const satisfies Record<Tag, BadgeProps['color']>
