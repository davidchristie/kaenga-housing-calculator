import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../../components/units/Currency'
import Percentage from '../../components/units/Percentage'
import yearlyMaintenanceCost from '../../models/yearly-maintenance-cost'

class Maintenance extends Component {
  render () {
    const { saving: { absolute, percentage }, value } = this.props
    return (
      <div>
        <h3>Maintenance</h3>
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
      ...yearlyMaintenanceCost(state)
    }
  }
)(Maintenance)
