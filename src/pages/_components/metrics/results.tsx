import { smoothTransition } from '#utils/transitions.ts'
import { useScroll, useSpring } from 'motion/react'
import type { RefObject } from 'react'
import { Result } from './result'

const results = ['Metric 1', 'Metric 2', 'Metric 3'] as const

export type ResultsProps = {
  target: RefObject<HTMLElement | null>
}

export function Results({ target }: ResultsProps) {
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end end'] })
  const progress = useSpring(scrollYProgress, smoothTransition)

  return (
    <ul className='z-10'>
      {results.map((result, index) => {
        const totalDuration = 0.7
        const itemDuration = totalDuration / results.length
        const start = 0.15 + index * itemDuration
        const end = start + itemDuration

        return (
          <Result
            key={index}
            progress={progress}
            start={start}
            end={end}>
            {result}
          </Result>
        )
      })}
    </ul>
  )
}
