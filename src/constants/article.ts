import type { BadgeProps } from '#components/badge.tsx'

export const tags = [
  'incrementality',
  'mmm',
  'attribution',
  'measurement',
  'optimization',
  'strategy',
  'creative',
  'testing',
  'data-infrastructure',
  'privacy',
  'ai-ml',
  'channels',
  'budget',
  'leadership',
  'agencies',
  'platforms'
] as const
export type Tag = (typeof tags)[number]

export const tagNames = {
  incrementality: 'Incrementality',
  mmm: 'Marketing Mix Modeling',
  attribution: 'Attribution',
  measurement: 'Measurement',
  optimization: 'Optimization',
  strategy: 'Strategy',
  creative: 'Creative',
  testing: 'Testing',
  'data-infrastructure': 'Data Infrastructure',
  privacy: 'Privacy',
  'ai-ml': 'AI & ML',
  channels: 'Channels',
  budget: 'Budget',
  leadership: 'Leadership',
  agencies: 'Agencies',
  platforms: 'Platforms'
} as const satisfies Record<Tag, string>

export const tagColors = {
  incrementality: 'blue',
  mmm: 'orange',
  attribution: 'purple',
  measurement: 'green',
  optimization: 'cyan',
  strategy: 'orange',
  creative: 'pink',
  testing: 'pink',
  'data-infrastructure': 'rose',
  privacy: 'indigo',
  'ai-ml': 'violet',
  channels: 'teal',
  budget: 'blue',
  leadership: 'rose',
  agencies: 'teal',
  platforms: 'indigo'
} as const satisfies Record<Tag, BadgeProps['color']>
