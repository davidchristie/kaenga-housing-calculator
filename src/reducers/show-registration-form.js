export default (state = false, action) => {
  switch (action.type) {
    case 'EDIT_REGISTRATION':
      return false

    case 'REGISTER_SUCCESS':
      return true

    default:
      return state
  }
}
