import { getTotalFloorspace } from './floorspace'
import {
  getCheapestSelectedSuburb,
  getMostExpensiveSelectedSuburb
} from './suburbs'

export function getLandCostRange (state) {
  const cheapest = getCheapestSelectedSuburb(state)
  const mostExpensive = getMostExpensiveSelectedSuburb(state)
  const minLandCostPerSqmFloorspace = cheapest
  ? cheapest.landCostPerSqmFloorspace
  : 0
  const maxLandCostPerSqmFloorspace = cheapest
  ? mostExpensive.landCostPerSqmFloorspace
  : 0
  const totalFloorspace = getTotalFloorspace(state)
  return {
    max: maxLandCostPerSqmFloorspace * totalFloorspace,
    min: minLandCostPerSqmFloorspace * totalFloorspace
  }
}

export function getTotalLandCost (state) {
  const cheapest = getCheapestSelectedSuburb(state)
  const landCostPerSqmFloorspace = cheapest
    ? cheapest.landCostPerSqmFloorspace
    : 0
  const totalFloorspace = getTotalFloorspace(state)
  return landCostPerSqmFloorspace * totalFloorspace
}
