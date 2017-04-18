export default state => {
  const form = state.form || {}
  const sustainability = form.sustainability || {}
  const values = sustainability.values || {}
  return values
}
