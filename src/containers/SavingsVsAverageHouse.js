import React from 'react'
import { connect } from 'react-redux'

import Currency from '../components/units/Currency'
import Percentage from '../components/units/Percentage'
import totalCostSaving from '../models/total-cost-saving'

class SavingsVsAverageHouse extends React.Component {
  render () {
    const { absolute, percentage } = this.props
    if (absolute < 0) {
      return null
    } else {
      return (
        <span>
          <Currency value={absolute} /> - <Percentage value={percentage} />
        </span>
      )
    }
  }
}

export default connect(
  state => {
    return {
      ...totalCostSaving(state)
    }
  }
)(SavingsVsAverageHouse)
