import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import Currency from '../../../components/units/Currency'
import minimumDeposit from '../../../models/minimum-deposit'

class MinimumDeposit extends Component {
  render () {
    return (
      <Panel
        style={{
          fontSize: '1.6em',
          textAlign: 'center'
        }}
      >
        <h4>Minimum Deposit</h4>
        <strong>
          <Currency value={this.props.value} />
        </strong>
      </Panel>
    )
  }
}

export default connect(
  state => {
    return {
      value: minimumDeposit(state)
    }
  }
)(MinimumDeposit)
