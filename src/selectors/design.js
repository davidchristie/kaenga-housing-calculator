export default state => {
  const form = state.form || {}
  const design = form.design || {}
  const values = design.values || {}
  return {
    bathrooms: values.bathrooms || 0,
    bedrooms: values.bedrooms || 0,
    occupants: values.occupants || 0,
    study: values.study || false
  }
}
