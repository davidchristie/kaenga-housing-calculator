import { getAverageInterest } from '../models/finance'
import { getTotalBuildCost } from './build-cost'
import { getLandCostRange, getTotalLandCost } from './land-cost'

const contingency = 1.1
const developerMargin = 1.15

export function getPriceRange (state) {
  const averageInterest = getAverageInterest()
  const buildCost = getTotalBuildCost(state)
  const landCostRange = getLandCostRange(state)
  const finance = averageInterest * contingency * developerMargin
  return {
    max: (buildCost + landCostRange.max) * finance,
    min: (buildCost + landCostRange.min) * finance
  }
}

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
    range: getPriceRange(state),
    total
  }
}
