import {
  HIDE_CALCULATED_PRICE_MODAL
} from '../actions/hideCalculatedPriceModal'

export default (state = true, { type }) => {
  switch (type) {
    case HIDE_CALCULATED_PRICE_MODAL:
      return false

    default:
      return state
  }
}
