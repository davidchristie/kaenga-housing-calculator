export function getHobbies (state) {
  const form = state.form || {}
  const hobbies = form.hobbies || {}
  const values = hobbies.values || {}
  return values
}
