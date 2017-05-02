import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../../components/units/Currency'
import Percentage from '../../components/units/Percentage'
import yearlyPowerCost from '../../models/yearly-power-cost'

class Power extends Component {
  render () {
    const { saving: { absolute, percentage }, value } = this.props
    return (
      <div>
        <h3>Power</h3>
        <p>
          Total: <Currency value={value} />
        </p>
        <p>
          Saving: <Currency value={absolute} /> - <Percentage value={percentage} />
        </p>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      ...yearlyPowerCost(state)
    }
  }
)(Power)
