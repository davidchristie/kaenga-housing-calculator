import sustainability from '../selectors/sustainability'
import totalCostSaving from './total-cost-saving'

const average = {
  insurance: 675,
  rates: 2900,
  water: 400
}

const water = state => {
  switch (sustainability.level) {
    case 'low':
      return average.water
    case 'medium':
      return 0.3 * average.water
    case 'high':
      return 0.3 * average.water
    default:
      return 0
  }
}

export default state => {
  const savings = totalCostSaving(state).percentage / 100

  const our = {
    insurance: average.insurance * (1 - savings),
    rates: 500 + (2900 - 500) * (1 - savings),
    water: water(state)
  }

  const averageTotal =
    average.insurance +
    average.rates +
    average.water

  const ourTotal =
    our.insurance +
    our.rates +
    our.water

  return {
    saving: {
      absolute: averageTotal - ourTotal,
      percentage: (averageTotal - ourTotal) / averageTotal * 100
    },
    value: ourTotal
  }
}
