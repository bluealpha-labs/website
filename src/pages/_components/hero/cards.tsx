import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Card } from './card'
import { CardContent } from './card-content'

const data = [
  {
    id: crypto.randomUUID(),
    insight: 'Trimmed 15% of Meta spend last Tuesday',
    result: 'Blended CAC fell 5 % and sales held steady'
  },
  {
    id: crypto.randomUUID(),
    insight: 'Moved 8% of spend from Meta to Pinterest',
    result: 'Added 4% topline revenue, ROAS 3.1×'
  },
  {
    id: crypto.randomUUID(),
    insight: 'Incrementality test uncovered 11% lift from YouTube prospecting.',
    result: 'We reallocated the entire line item - net margin +5%.'
  }
]

const animationConfig = { stiffness: 260, damping: 20 }

export function Cards() {
  const [cards, setCards] = useState(data)

  const sendToBack = (id: string) => {
    setCards((prev) => {
      const newCards = [...prev]
      const index = newCards.findIndex((card) => card.id === id)
      const [card] = newCards.splice(index, 1)
      newCards.unshift(card)
      return newCards
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const topCardId = cards[cards.length - 1].id
      sendToBack(topCardId)
    }, 4000) // Change card every 4 seconds

    return () => clearInterval(interval)
  }, [cards])

  return (
    <div
      className='relative w-full max-w-[420px]'
      style={{
        minHeight: 320,
        perspective: 600
      }}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              visualDuration: 0.6,
              bounce: 0.3,
              delay: (cards.length - 1 - index) * 0.15
            }}>
            <Card onSendToBack={() => sendToBack(card.id)}>
              <motion.div
                animate={{
                  y: 20 * index,
                  scale: 1 + index * 0.12 - cards.length * 0.12,
                  transformOrigin: 'center top'
                }}
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping
                }}
                className='w-full'>
                <CardContent
                  insight={card.insight}
                  result={card.result}
                  position={cards.length - index - 1}
                />
              </motion.div>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
