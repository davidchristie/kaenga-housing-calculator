import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../../components/units/Currency'
import Percentage from '../../components/units/Percentage'
import yearlyTransportCost from '../../models/yearly-transport-cost'

class Transport extends Component {
  render () {
    const { saving: { absolute, percentage }, value } = this.props
    return (
      <div>
        <h3>Transport</h3>
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
      ...yearlyTransportCost(state)
    }
  }
)(Transport)
