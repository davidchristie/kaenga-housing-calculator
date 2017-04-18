import floorspace from './floorspace'
import sustainablity from './sustainability'

const costOfServices = 1.15
const grossBuildCostPerSqm = 4000 // nzd
const grossToNet = 0.9
const gst = 1.15

const buildCostPerSqmFloorspace = grossBuildCostPerSqm *
  costOfServices *
  gst /
  grossToNet

export function getTotalBuildCost (state) {
  let total = floorspace(state).total * buildCostPerSqmFloorspace
  if (sustainablity(state).level === 'medium') {
    total += 5000 // Cost of medium sustainablity
  }
  if (sustainablity(state).level === 'high') {
    total += 10000 // Cost of high sustainablity
  }
  return total
}
