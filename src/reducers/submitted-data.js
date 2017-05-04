export default (state = null, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return action.data

    default:
      return state
  }
}
