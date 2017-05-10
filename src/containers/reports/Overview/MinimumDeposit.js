import React, { Component } from 'react'
import { connect } from 'react-redux'

import Currency from '../../../components/units/Currency'
import minimumDeposit from '../../../models/minimum-deposit'
import Box from './Box'

class MinimumDeposit extends Component {
  render () {
    return (
      <Box>
        <h4>Minimum Deposit</h4>
        <strong>
          <Currency value={this.props.value} />
        </strong>
      </Box>
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
