import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../../../components/units/Currency'
import { getReport } from '../../../selectors/report'

class PriceRange extends Component {
  render () {
    const { range } = this.props
    return (
      <strong>
        {range.max === range.min
          ? <Currency value={range.min} />
          : <span>
            <Currency value={range.min} />
            -
            <Currency value={range.max} />
          </span>}
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
