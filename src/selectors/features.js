import list from '../models/feature-list'

function selected (state) {
  return list.filter(feature => feature.condition(state))
}

export default state => {
  return {
    selected: selected(state)
  }
}
