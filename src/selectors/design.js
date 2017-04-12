export default state => {
  const form = state.form || {}
  const design = form.design || {}
  return design.values || {}
}
