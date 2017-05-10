import React, { Component } from 'react'
import { connect } from 'react-redux'

import housingType from '../../../selectors/housing-type'
import Box from './Box'

class HousingType extends Component {
  render () {
    return (
      <Box>
        <h4>Housing Type</h4>
        <strong>{this.props.value}</strong>
      </Box>
    )
  }
}

export default connect(
  state => {
    return {
      value: housingType(state).type
    }
  }
)(HousingType)
