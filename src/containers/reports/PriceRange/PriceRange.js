import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../../../components/units/Currency'
import { getReport } from '../../../selectors/report'

class PriceRange extends Component {
  render () {
    const { range } = this.props
    return (
      <strong>
        <Currency value={range.min} />-<Currency value={range.max} />
      </strong>
    )
  }
}

export default connect(
  state => {
    return {
      range: getReport(state).range
    }
  }
)(PriceRange)
