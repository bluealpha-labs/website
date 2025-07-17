import { smoothTransition } from '#utils/transitions.ts'
import { useScroll, useSpring } from 'motion/react'
import type { RefObject } from 'react'
import { ResultItem } from './result-item'

const results = [
  { value: '$14x', description: 'revenue for every $1 newly routed through BlueAlpha' },
  { value: '21%', description: 'reduction in Cost per Acquisition, while growing top-line revenue' },
  { value: '5x', description: 'productivity, more campaigns and channels with the same headcount' }
] as const
export type Result = (typeof results)[number]

export type ResultsProps = {
  target: RefObject<HTMLElement | null>
}

export function ResultList({ target }: ResultsProps) {
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end end'] })
  const progress = useSpring(scrollYProgress, smoothTransition)

  return (
    <ul className='z-10 flex flex-col items-center gap-6'>
      {results.map((result, index) => {
        const totalDuration = 0.7
        const itemDuration = totalDuration / results.length
        const start = 0.15 + index * itemDuration
        const end = start + itemDuration

        return (
          <ResultItem
            key={index}
            progress={progress}
            start={start}
            end={end}
            result={result}
          />
        )
      })}
    </ul>
  )
}
