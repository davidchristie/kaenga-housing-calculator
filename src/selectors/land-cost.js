import floorspace from './floorspace'
import {
  getCheapestSelectedSuburb,
  getMostExpensiveSelectedSuburb
} from './suburbs'

const fixedCosts = 30000 // cost of developer’s contribution, reserves

export function getLandCostRange (state) {
  const cheapest = getCheapestSelectedSuburb(state)
  const mostExpensive = getMostExpensiveSelectedSuburb(state)
  const minLandCostPerSqmFloorspace = cheapest
  ? cheapest.landCostPerSqmFloorspace
  : 0
  const maxLandCostPerSqmFloorspace = cheapest
  ? mostExpensive.landCostPerSqmFloorspace
  : 0
  const totalFloorspace = floorspace(state).total
  return {
    max: maxLandCostPerSqmFloorspace * totalFloorspace + fixedCosts,
    min: minLandCostPerSqmFloorspace * totalFloorspace + fixedCosts
  }
}

export function getPerSqmRange (state) {
  const cheapest = getCheapestSelectedSuburb(state)
  const mostExpensive = getMostExpensiveSelectedSuburb(state)
  const minLandCostPerSqmFloorspace = cheapest
  ? cheapest.landCostPerSqmFloorspace
  : 0
  const maxLandCostPerSqmFloorspace = cheapest
  ? mostExpensive.landCostPerSqmFloorspace
  : 0
  return {
    max: maxLandCostPerSqmFloorspace,
    min: minLandCostPerSqmFloorspace
  }
}

export function getTotalLandCost (state) {
  const cheapest = getCheapestSelectedSuburb(state)
  const landCostPerSqmFloorspace = cheapest
    ? cheapest.landCostPerSqmFloorspace
    : 0
  return floorspace(state).total * landCostPerSqmFloorspace + fixedCosts
}
