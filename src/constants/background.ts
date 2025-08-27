import background1 from '#assets/background-1.png'
import background10 from '#assets/background-10.png'
import background11 from '#assets/background-11.png'
import background12 from '#assets/background-12.png'
import background13 from '#assets/background-13.png'
import background14 from '#assets/background-14.png'
import background15 from '#assets/background-15.png'
import background16 from '#assets/background-16.png'
import background17 from '#assets/background-17.png'
import background18 from '#assets/background-18.png'
import background2 from '#assets/background-2.png'
import background3 from '#assets/background-3.png'
import background4 from '#assets/background-4.png'
import background5 from '#assets/background-5.png'
import background6 from '#assets/background-6.png'
import background7 from '#assets/background-7.png'
import background8 from '#assets/background-8.png'
import background9 from '#assets/background-9.png'

export const backgrounds = [
  background1,
  background2,
  background3,
  background4,
  background5,
  background6,
  background7,
  background8,
  background9,
  background10,
  background11,
  background12,
  background13,
  background14,
  background15,
  background16,
  background17,
  background18
]

export function getBackground(index: number) {
  return backgrounds[index % backgrounds.length]
}
