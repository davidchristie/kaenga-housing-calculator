export default state => {
  const form = state.form || {}
  const finance = form.finance || {}
  const values = finance.values || {}
  return values
}
