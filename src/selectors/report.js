import { getAverageInterest } from '../models/finance'
import { getTotalBuildCost } from './build-cost'
import { getTotalLandCost } from './land-cost'

const contingency = 1.1
const developerMargin = 1.15

export function getReport (state) {
  const averageInterest = getAverageInterest()
  const buildCost = getTotalBuildCost(state)
  const landCost = getTotalLandCost(state)
  const total = (buildCost + landCost) *
    averageInterest *
    contingency *
    developerMargin
  return {
    buildCost,
    landCost,
    total
  }
}
