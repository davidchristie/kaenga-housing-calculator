import design from './design'
import livingSpace from './living-space'

const bathroomSize = 5 // sqm
const bedroomSize = 9.5 // sqm
const studySize = 6.72// sqm

function floorspace (state) {
  const {
    bedrooms,
    bathrooms,
    study
  } = design(state)
  return {
    bathrooms: bathrooms * bathroomSize,
    bedrooms: bedrooms * bedroomSize,
    living: livingSpace(state).total,
    study: study * studySize
  }
}

function total (state) {
  const {
    bathrooms,
    bedrooms,
    living,
    study
  } = floorspace(state)
  return bathrooms + bedrooms + living + study
}

export default state => {
  return {
    ...floorspace(state),
    total: total(state)
  }
}
