export default state => {
  const form = state.form || {}
  const values = form.values || {}
  return values.values || {}
}
