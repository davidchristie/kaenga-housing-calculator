export default state => {
  const form = state.form || {}
  const location = form.location || {}
  const values = location.values || {}
  return values
}
