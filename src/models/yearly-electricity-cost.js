import floorspace from '../selectors/floorspace'
import sustainability from '../selectors/sustainability'

const annualPowerUsage = 11410

const spaceHeating = 0.34 * annualPowerUsage
const waterHeating = 0.29 * annualPowerUsage
const appliances = 0.19 * annualPowerUsage
const refridgeration = 0.1 * annualPowerUsage
const lighting = 0.08 * annualPowerUsage

const priceBasedOnSingleMetering = 2165
const administrativeCosts = priceBasedOnSingleMetering / 0.8

/**
 *  The yearly cost of an average house.
 */
function base () {
  const normalSpend = 3135
  const pricePerKwh = normalSpend / annualPowerUsage
  const normalUsage =
    spaceHeating +
    waterHeating +
    appliances +
    refridgeration +
    lighting
  return normalUsage * pricePerKwh
}

/**
 *  The yearly cost of a low sustainability Kaenga home.
 */
function low (state) {
  const pricePerKwh = administrativeCosts / annualPowerUsage
  const usage =
    spaceHeating * floorspace(state).total / 205 +
    waterHeating * 0.5 + // From low flow showers
    appliances * 0.5 + // Based on going from 2-3 to 5-6 Energy Star appliances in most cases
    refridgeration * 0.5 + // Based on going from 2-3 to 5-6 Energy Star appliances in most cases
    lighting * 0.14 // Based on using LEDs
  return usage * pricePerKwh
}

/**
 *  The yearly cost of a medium sustainability Kaenga home.
 */
function medium (state) {
  const pricePerKwh = administrativeCosts / annualPowerUsage
  const usage =
    spaceHeating * floorspace(state).total / 205 +
    0 + // Based on solar water heating
    appliances * 0.3 + // Based on going from 2-3 to 5-6 Energy Star appliances in most cases
    refridgeration * 0.3 + // Based on going from 2-3 to 5-6 Energy Star appliances in most cases
    lighting * 0.14 // Based on using LEDs
  return usage * pricePerKwh
}

/**
 *  The yearly cost of a high sustainability Kaenga home.
 */
function high (state) {
  const pricePerKwh = 0.12
  const usage =
    spaceHeating * floorspace(state).total / 205 +
    0 + // Based on solar water heating
    appliances * 0.3 + // Based on going from 2-3 to 5-6 Energy Star appliances in most cases
    refridgeration * 0.3 + // Based on going from 2-3 to 5-6 Energy Star appliances in most cases
    lighting * 0.14 // Based on using LEDs
  return usage * pricePerKwh
}

function value (state) {
  const level = sustainability(state).level
  switch (level) {
    case 'low':
      return low(state)
    case 'medium':
      return medium(state)
    case 'high':
      return high(state)
    default:
      return 0
  }
}

export default function (state) {
  const v = value(state)
  const b = base(state)
  return {
    saving: {
      absolute: b - v,
      percentage: (b - v) / b * 100
    },
    value: v
  }
}
