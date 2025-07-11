import { useRef } from 'react'
import { Boxes } from './boxes'
import { Results } from './results'
import { Title } from './title'

export function Metrics() {
  const target = useRef(null)

  return (
    <section
      ref={target}
      className='h-[300vh]'>
      <div className='sticky top-0 flex h-dvh items-center justify-center'>
        <div className='flex flex-col gap-4'>
          <Title />
          <Results target={target} />
        </div>
        <Boxes />
      </div>
    </section>
  )
}
