import { connect } from 'react-redux'

import CheapestSuburb from '../../components/CheapestSuburb'
import { getCheapestSelectedSuburb } from '../../selectors/suburbs'

export default connect(
  state => {
    const cheapest = getCheapestSelectedSuburb(state)
    return {
      ...cheapest,
      visible: cheapest !== undefined
    }
  }
)(CheapestSuburb)
