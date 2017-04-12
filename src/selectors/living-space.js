import design from './design'

const livingSpacePerPerson = 6 // sqm

export default function getLivingSpace (state) {
  const { occupants } = design(state)
  return {
    total: 8 + occupants * livingSpacePerPerson
  }
}
