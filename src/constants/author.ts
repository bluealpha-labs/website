import matthias from '#assets/authors/matthias.png'
import peter from '#assets/authors/peter.png'

export const authors = ['matthias', 'peter'] as const
export type Author = (typeof authors)[number]

export const authorNames = {
  matthias: 'Matthias Stepancich',
  peter: 'Peter Grafe'
} as const satisfies Record<Author, string>

export const authorImages = {
  matthias,
  peter
} as const satisfies Record<Author, ImageMetadata>
