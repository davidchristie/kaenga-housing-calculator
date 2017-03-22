export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_SUBURBS':
      return action.suburbs

    default:
      return state
  }
}
