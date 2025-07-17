import { useRef } from 'react'
import { Boxes } from './boxes'
import { ResultList } from './result-list'
import { Title } from './title'

export function Metrics() {
  const target = useRef(null)

  return (
    <section
      ref={target}
      className='h-[300vh]'>
      <div className='sticky top-0 flex h-dvh items-center justify-center'>
        <div className='flex max-w-[90vw] flex-col gap-8 md:max-w-[80vw] md:gap-12 lg:max-w-[1200px]'>
          <Title />
          <ResultList target={target} />
        </div>
        <Boxes />
      </div>
    </section>
  )
}
