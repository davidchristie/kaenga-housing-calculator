import React, { Component } from 'react'
import { connect } from 'react-redux'

import isEligibleForWelcomeHomeLoan from '../../../models/isEligibleForWelcomeHomeLoan'
import Box from './Box'

class WelcomeHomeLoanTip extends Component {
  render () {
    const style = this.props.show ? {} : {display: 'none'}
    return (
      <Box style={style}>
        If you earn less than $85,000 as an individual or $130,000 as a couple, you may be eligible for a Welcome Home Loan which would mean you only need a 10% deposit. <a href='http://www.welcomehomeloan.co.nz/am-i-eligible' target='_blank'>Click here</a> for details.
      </Box>
    )
  }
}

export default connect(
  state => {
    return {
      show: isEligibleForWelcomeHomeLoan(state)
    }
  }
)(WelcomeHomeLoanTip)
