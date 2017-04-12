import list from '../models/feature-list'

function totalCost (state) {
  const selectedFeatures = selected(state)

  return 0 // TODO Return $$$
}

function selected (state) {
  return list.filter(feature => feature.condition(state))
}

export default state => {
  return {
    selected: selected(state),
    totalCost: totalCost(state)
  }
}
