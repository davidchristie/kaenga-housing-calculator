import design from './design'
import livingSpace from './living-space'

const bathroomSize = 5 // sqm
const bedroomSize = 9.5 // sqm

function floorspace (state) {
  const {
    bedrooms,
    bathrooms
  } = design(state)
  return {
    bathrooms: bathrooms * bathroomSize,
    bedrooms: bedrooms * bedroomSize,
    living: livingSpace(state).total
  }
}

function total (state) {
  const {
    bathrooms,
    bedrooms,
    living
  } = floorspace(state)
  return bathrooms + bedrooms + living
}

export default state => {
  return {
    ...floorspace(state),
    total: total(state)
  }
}
