export default (state = {}, {payload, type}) => {
  switch (type) {
    case 'SCROLL_TO_ELEMENT_ID_COMPLETE':
      return Object.assign(
        {},
        state,
        {targetId: undefined}
      )

    case 'SCROLLING_TO_ELEMENT_ID':
      return Object.assign(
        {},
        state,
        {targetId: payload}
      )

    default:
      return state
  }
}
