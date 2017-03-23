import { getTotalFloorspace } from './floorspace'

const grossBuildCostPerSqm = 3000
const costOfServices = 1.15
const gst = 1.15
const grossToNet = 0.9

function getBuildCostPerSqmFloorspace () {
  return grossBuildCostPerSqm * costOfServices * gst / grossToNet
}

export function getTotalBuildCost (state) {
  const totalFloorspace = getTotalFloorspace(state)
  const buildCostPerSqmFloorspace = getBuildCostPerSqmFloorspace()
  return totalFloorspace * buildCostPerSqmFloorspace
}
