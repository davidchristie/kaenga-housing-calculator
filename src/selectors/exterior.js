export default state => {
  const form = state.form || {}
  const exterior = form.exterior || {}
  const values = exterior.values || {}
  return values
}
