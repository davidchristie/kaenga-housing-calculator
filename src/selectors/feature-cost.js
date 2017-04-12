import features from './features'

export default state => {
  const selected = features(state).selected
  const range = {
    max: 0,
    min: 0
  }
  selected.forEach(feature => {
    const { max, min } = feature.cost(state)
    range.max += max
    range.min += min
  })
  return {
    range
  }
}
