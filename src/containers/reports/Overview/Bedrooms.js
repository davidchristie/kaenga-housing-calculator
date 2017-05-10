import React, { Component } from 'react'
import { connect } from 'react-redux'

import design from '../../../selectors/design'
import Box from './Box'

class Bedrooms extends Component {
  render () {
    return (
      <Box>
        <h4>Bedrooms</h4>
        <strong>{this.props.value}</strong>
      </Box>
    )
  }
}

export default connect(
  state => {
    return {
      value: design(state).bedrooms
    }
  }
)(Bedrooms)
