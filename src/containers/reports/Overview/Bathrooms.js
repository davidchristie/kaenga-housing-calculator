import React, { Component } from 'react'
import { connect } from 'react-redux'

import design from '../../../selectors/design'
import Box from './Box'

class Bathrooms extends Component {
  render () {
    return (
      <Box>
        <h4>Bathrooms</h4>
        <strong>{this.props.value}</strong>
      </Box>
    )
  }
}

export default connect(
  state => {
    return {
      value: design(state).bathrooms
    }
  }
)(Bathrooms)
