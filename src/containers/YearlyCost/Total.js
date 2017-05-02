import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../../components/units/Currency'
import Percentage from '../../components/units/Percentage'
import yearlyTotalCost from '../../models/yearly-total-cost'

class Total extends Component {
  render () {
    const { saving: { absolute, percentage }, value } = this.props
    return (
      <div>
        <h3>Total</h3>
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
      ...yearlyTotalCost(state)
    }
  }
)(Total)
