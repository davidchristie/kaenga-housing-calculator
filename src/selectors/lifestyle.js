export default state => {
  const form = state.form || {}
  const lifestyle = form.lifestyle || {}
  const values = lifestyle.values || {}
  return values
}
