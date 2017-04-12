import floorspace from './floorspace'

const costOfServices = 1.15
const grossBuildCostPerSqm = 4000 // nzd
const grossToNet = 0.9
const gst = 1.15

const buildCostPerSqmFloorspace = grossBuildCostPerSqm *
  costOfServices *
  gst /
  grossToNet

export function getTotalBuildCost (state) {
  return floorspace(state).total * buildCostPerSqmFloorspace
}
