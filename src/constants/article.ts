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
  mmm: 'indigo',
  attribution: 'blueLight',
  measurement: 'cyan',
  optimization: 'greenLight',
  strategy: 'green',
  creative: 'purple',
  testing: 'violet',
  'data-infrastructure': 'orange',
  privacy: 'teal',
  'ai-ml': 'yellow',
  channels: 'blueDark',
  budget: 'rose',
  leadership: 'moss',
  agencies: 'fuchsia',
  platforms: 'pink'
} as const satisfies Record<Tag, BadgeProps['color']>
