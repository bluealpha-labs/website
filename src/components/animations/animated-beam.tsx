import { cn } from '#utils/cn.ts'
import { motion } from 'motion/react'
import { type RefObject, useEffect, useId, useState } from 'react'

export type AnimatedBeamProps = {
  className?: string
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  reverse?: boolean
  direction?: 'horizontal' | 'vertical'
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  direction = 'vertical',
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = '#a8a29e',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#2563eb',
  gradientStopColor = '#93c5fd',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0
}: AnimatedBeamProps) {
  const id = useId()
  const [pathD, setPathD] = useState('')
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  // Calculate the gradient coordinates based on the reverse and direction props
  const gradientCoordinates = (() => {
    if (direction === 'vertical') {
      return reverse
        ? {
            x1: ['0%', '0%'],
            x2: ['0%', '0%'],
            y1: ['90%', '-10%'],
            y2: ['100%', '0%']
          }
        : {
            x1: ['0%', '0%'],
            x2: ['0%', '0%'],
            y1: ['10%', '110%'],
            y2: ['0%', '100%']
          }
    } else {
      return reverse
        ? {
            x1: ['90%', '-10%'],
            x2: ['100%', '0%'],
            y1: ['0%', '0%'],
            y2: ['0%', '0%']
          }
        : {
            x1: ['10%', '110%'],
            x2: ['0%', '100%'],
            y1: ['0%', '0%'],
            y2: ['0%', '0%']
          }
    }
  })()

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const rectA = fromRef.current.getBoundingClientRect()
        const rectB = toRef.current.getBoundingClientRect()

        const svgWidth = containerRect.width
        const svgHeight = containerRect.height
        setSvgDimensions({ width: svgWidth, height: svgHeight })

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

        // Adjust the control point based on direction
        const controlX = direction === 'vertical' ? startX - curvature : (startX + endX) / 2
        const controlY = direction === 'vertical' ? (startY + endY) / 2 : startY - curvature
        const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`
        setPathD(d)
      }
    }

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // Recalculate the path when resize occurs
      updatePath()
    })

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Call the updatePath initially to set the initial path
    updatePath()

    // Clean up the observer on component unmount
    return () => resizeObserver.disconnect()
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset, direction])

  return (
    <svg
      fill='none'
      width={svgDimensions.width}
      height={svgDimensions.height}
      className={cn('pointer-events-none absolute top-0 left-0 transform-gpu stroke-2', className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}>
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap='round'
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity='1'
        strokeLinecap='round'
      />
      <defs>
        <motion.linearGradient
          className='transform-gpu'
          id={id}
          gradientUnits={'userSpaceOnUse'}
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '0%'
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0
          }}>
          <stop
            stopColor={gradientStartColor}
            stopOpacity='0'></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop
            offset='32.5%'
            stopColor={gradientStopColor}></stop>
          <stop
            offset='100%'
            stopColor={gradientStopColor}
            stopOpacity='0'></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  )
}
