import React, { Component } from 'react'
import { Well } from 'react-bootstrap'
import { connect } from 'react-redux'

import Currency from '../../components/units/Currency'
import Percentage from '../../components/units/Percentage'
import yearlyElectricityCost from '../../models/yearly-electricity-cost'

class YearlyCost extends Component {
  render () {
    const { saving: { absolute, percentage }, value } = this.props
    return (
      <Well>
        <h2>Yearly Cost</h2>
        <h3>Electricity</h3>
        <p>
          Total: <Currency value={value} />
        </p>
        <p>
          Saving: <Currency value={absolute} /> - <Percentage value={percentage} />
        </p>
      </Well>
    )
  }
}

export default connect(
  state => {
    return {
      ...yearlyElectricityCost(state)
    }
  }
)(YearlyCost)
