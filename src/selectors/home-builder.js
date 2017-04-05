export function getHomeBuilderValues (state) {
  const form = state.form || {}
  const homeBuilder = form.homeBuilder || {}
  return homeBuilder.values || {}
}
