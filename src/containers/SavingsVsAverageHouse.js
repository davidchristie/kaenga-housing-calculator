import React from 'react'
import { connect } from 'react-redux'

import Currency from '../components/units/Currency'
import Percentage from '../components/units/Percentage'
import { getPriceRange } from '../selectors/report'
import { getCheapestSelectedSuburb } from '../selectors/suburbs'

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
    const kaengaMin = getPriceRange(state).min
    const cheapest = getCheapestSelectedSuburb(state) || {}
    const averageHouse = cheapest.threeBedroomHousePrice || kaengaMin
    const absolute = averageHouse - kaengaMin
    const percentage = (averageHouse - kaengaMin) / averageHouse * 100
    return {
      absolute,
      percentage
    }
  }
)(SavingsVsAverageHouse)
