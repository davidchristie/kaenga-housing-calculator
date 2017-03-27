export function getCheapestSelectedSuburb (state) {
  const selected = getSelectedSuburbs(state)
  const min = Math.min(...selected.map(suburb => {
    return suburb.landCostPerSqmFloorspace
  }))
  return selected.find(suburb => {
    return suburb.landCostPerSqmFloorspace === min
  })
}

export function getSelectedSuburbs (state) {
  const form = state.form || {}
  const location = form.location || {}
  const values = location.values || {}
  const selected = values.suburbs || []
  return getSuburbs(state).filter(suburb => selected.includes(suburb.name))
}

export function getSuburbs (state) {
  return state.suburbs
}
