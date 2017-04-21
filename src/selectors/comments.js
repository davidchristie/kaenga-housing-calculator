export default state => {
  const form = state.form || {}
  const comments = form.comments || {}
  const values = comments.values || {}
  return values
}
