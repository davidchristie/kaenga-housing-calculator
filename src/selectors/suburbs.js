export function getSelectedSuburbs (state) {
  const values = state.form.location.values || {}
  const selected = values.suburbs || []
  return getSuburbs(state).filter(suburb => selected.includes(suburb.name))
}

export function getSuburbs (state) {
  return state.suburbs
}
