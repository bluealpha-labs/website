import type { ComponentProps } from 'react'

type Heading = { depth: number; slug: string; text: string }

type Props = ComponentProps<'div'> & {
  headings: Heading[]
}

export function TableOfContents({ headings, className, ...props }: Props) {
  // Only show main sections (H2)
  const tops = (headings || []).filter((h) => h.depth === 2)
  if (tops.length < 2) return null

  return (
    <div
      className={[
        // Card container with light gray background
        'mb-8 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3',
        // Make links look like normal text; still act as links
        'prose-a:text-inherit prose-a:no-underline hover:prose-a:underline'
      ]
        .concat(className ? [className] : [])
        .join(' ')}
      {...props}>
      <h2 className='mt-0 mb-2'>Table of contents</h2>
      <ul className='space-y-1'>
        {tops.map((h2) => (
          <li key={h2.slug}>
            <a className='text-inherit' href={`#${h2.slug}`}>
              {h2.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
