import { getTotalFloorspace } from './floorspace'
import { getCheapestSelectedSuburb } from './suburbs'

export function getTotalLandCost (state) {
  const cheapest = getCheapestSelectedSuburb(state)
  const landCostPerSqmFloorspace = cheapest
    ? cheapest.landCostPerSqmFloorspace
    : 0
  const totalFloorspace = getTotalFloorspace(state)
  return landCostPerSqmFloorspace * totalFloorspace
}
