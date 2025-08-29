export const departments = ['design', 'engineering'] as const
export type Department = (typeof departments)[number]

export const departmentNames = {
  design: 'Design',
  engineering: 'Engineering'
} as const satisfies Record<Department, string>

export const locations = ['remote', 'sf'] as const
export type Location = (typeof locations)[number]

export const locationNames = {
  remote: 'Remote',
  sf: 'San Francisco'
} as const satisfies Record<Location, string>
