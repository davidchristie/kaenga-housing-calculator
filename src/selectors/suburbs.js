export function getCheapestSelectedSuburb (state) {
  const selected = getSelectedSuburbs(state)
  const prices = selected.map(suburb => {
    return suburb.price
  })
  const min = Math.min(...prices)
  return selected.find(suburb => {
    return suburb.price === min
  })
}

export function getSelectedSuburbs (state) {
  const values = state.form.location.values || {}
  const selected = values.suburbs || []
  return getSuburbs(state).filter(suburb => selected.includes(suburb.name))
}

export function getSuburbs (state) {
  return state.suburbs
}
