export default (state = false, action) => {
  switch (action.type) {
    case 'HIDE_REGISTER_FORM':
      return false

    case 'SHOW_REGISTER_FORM':
      return true

    default:
      return state
  }
}
