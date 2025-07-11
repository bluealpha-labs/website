import type { TargetAndTransition, Transition } from 'motion/react'

export const smoothTransition: Transition = { type: 'spring', stiffness: 100, damping: 25, restDelta: 0.001 }

export const snappyTransition: Transition = { type: 'spring', stiffness: 400, damping: 30, restDelta: 0.001 }

export const whileHover: TargetAndTransition = { y: -1, transition: snappyTransition }

export const whileTap: TargetAndTransition = { y: 2, transition: snappyTransition }
