export default state => {
  const form = state.form || {}
  const interior = form.interior || {}
  const values = interior.values || {}
  return values
}
