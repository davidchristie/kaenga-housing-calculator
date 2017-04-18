export default state => {
  const form = state.form || {}
  const housingType = form.housingType || {}
  const values = housingType.values || {}
  return values
}
