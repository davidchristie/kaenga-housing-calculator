import { connect } from 'react-redux'

import CheapestSuburb from '../../components/CheapestSuburb'
import { getSelectedSuburbs } from '../../selectors/suburbs'

export default connect(
  state => {
    const selected = getSelectedSuburbs(state)
    const prices = selected.map(suburb => {
      return suburb.price
    })
    const min = Math.min(...prices)
    const cheapest = selected.find(suburb => {
      return suburb.price === min
    })
    return {
      ...cheapest,
      visible: cheapest !== undefined
    }
  }
)(CheapestSuburb)
