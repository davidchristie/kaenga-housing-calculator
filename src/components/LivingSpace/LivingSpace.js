import React, { Component, PropTypes } from 'react'
import { Well } from 'react-bootstrap'

import SquareMetres from '../SquareMetres'

class LivingSpace extends Component {
  render () {
    const {
      total
    } = this.props
    return (
      <Well>
        <h1>Living space</h1>
        <p>
          <span>Total (including kitchens): </span>
          <strong><SquareMetres value={total} /></strong>
        </p>
      </Well>
    )
  }
}

LivingSpace.defaultProps = {
  total: 0
}

LivingSpace.propTypes = {
  total: PropTypes.number
}

export default LivingSpace