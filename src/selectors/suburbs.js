import location from './location'

export function getCheapestSelectedSuburb (state) {
  const selected = getSelectedSuburbs(state)
  const min = Math.min(...selected.map(suburb => {
    return suburb.costPerSqmKaenga
  }))
  return selected.find(suburb => {
    return suburb.costPerSqmKaenga === min
  })
}

export function getMostExpensiveSelectedSuburb (state) {
  const selected = getSelectedSuburbs(state)
  const max = Math.max(...selected.map(suburb => {
    return suburb.costPerSqmKaenga
  }))
  return selected.find(suburb => {
    return suburb.costPerSqmKaenga === max
  })
}

export function getSelectedRegions (state) {
  const values = location(state)
  const regions = getSuburbs(state)
    .filter(suburb => suburb.city === values.city)
    .filter(suburb => values.commute.includes(suburb.commute))
    .map(suburb => suburb.region)
  return Array.from(new Set(regions))
}

export function getSelectedSuburbs (state) {
  const values = location(state)
  const selected = getSuburbs(state)
    .filter(suburb => suburb.city === values.city)
    .filter(suburb => values.commute.includes(suburb.commute))
    .filter(suburb => values.region.includes(suburb.region))
  return selected
}

export function getSuburbs (state) {
  return state.suburbs
}
