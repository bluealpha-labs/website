import { motion } from 'motion/react'
import { useState } from 'react'
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

const cardWidth = 440
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

  return (
    <div
      className='relative'
      style={{
        width: cardWidth,
        minHeight: 320,
        perspective: 600
      }}>
      {cards.map((card, index) => {
        return (
          <Card
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}>
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
              style={{ width: cardWidth }}>
              <CardContent
                insight={card.insight}
                result={card.result}
                position={cards.length - index - 1}
              />
            </motion.div>
          </Card>
        )
      })}
    </div>
  )
}
