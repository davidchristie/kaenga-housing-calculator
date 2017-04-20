import floorspace from './floorspace'
import { getCheapestSelectedSuburb } from './suburbs'
import sustainability from './sustainability'
import transport from './transport'

const costOfServices = 1.15
const grossToNet = 0.9
const gst = 1.15

export function getBuildCostPerSqm (state) {
  const cheapest = getCheapestSelectedSuburb(state) || {}
  const grossBuildCostPerSqm = cheapest.grossBuildCostPerSqm || 0
  return grossBuildCostPerSqm *
    costOfServices *
    gst /
    grossToNet
}

export function getTotalBuildCost (state) {
  let total = floorspace(state).total * getBuildCostPerSqm(state)

  // Cost of sustainability options
  if (sustainability(state).level === 'medium') {
    total += 5000 // Cost of medium sustainability
  }
  if (sustainability(state).level === 'high') {
    total += 10000 // Cost of high sustainability
  }

  // Cost of transport options
  const transportValues = transport(state)
  if (transportValues.commute === 'car') {
    total += 50000
  }
  if (transportValues.commute === 'carPool') {
    total += 17000
  }
  if (transportValues.commute === 'publicTransport') {
    if (transportValues.needCar === 'mostDays') {
      total += 17000
    } else {
      total += 10000
    }
  }

  return total
}
