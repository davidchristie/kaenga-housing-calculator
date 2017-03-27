export function getOccupants (state) {
  const form = state.form || {}
  const occupants = form.occupants || {}
  const values = occupants.values || {}
  return {
    adults: values.adults || 0,
    children: values.children || 0,
    teenagers: values.teenagers || 0
  }
}
