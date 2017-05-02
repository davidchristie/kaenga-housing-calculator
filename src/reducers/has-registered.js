export default (state = false, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return true

    default:
      return state
  }
}
