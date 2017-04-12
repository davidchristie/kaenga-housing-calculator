import { getAverageInterest } from '../models/finance'
import { getTotalBuildCost } from './build-cost'
import { getLandCostRange, getTotalLandCost } from './land-cost'
import featureCost from './feature-cost'

const contingency = 1.1
const developerMargin = 1.20

export function getPriceRange (state) {
  const averageInterest = getAverageInterest()
  const buildCost = getTotalBuildCost(state)
  const landCostRange = getLandCostRange(state)
  const featureCostRange = featureCost(state).range
  const finance = averageInterest * contingency * developerMargin
  return {
    max: (
      buildCost +
      featureCostRange.max +
      landCostRange.max
    ) * finance,
    min: (
      buildCost +
      featureCostRange.min +
      landCostRange.min
    ) * finance
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
