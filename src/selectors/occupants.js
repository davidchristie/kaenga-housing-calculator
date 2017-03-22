export function getOccupants (state) {
  const values = state.form.home.values || {}
  return {
    adults: values.adults || 0,
    children: values.children || 0,
    teenagers: values.teenagers || 0
  }
}
