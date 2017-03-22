import React, { Component, PropTypes } from 'react'
import { Well } from 'react-bootstrap'

class LivingSpace extends Component {
  render () {
    const {
      total
    } = this.props
    return (
      <Well>
        <h1>Living space (including kitchens)</h1>
        <p>
          Total: <strong>{total}m<sup>2</sup></strong>
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
