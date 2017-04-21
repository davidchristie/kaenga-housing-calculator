export default state => {
  const form = state.form || {}
  const register = form.register || {}
  const values = register.values || {}
  return values
}
