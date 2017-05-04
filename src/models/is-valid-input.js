export default state => {
  const form = state.form
  return Object.getOwnPropertyNames(form)
    .every(name => !form[name].syncErrors)
}
