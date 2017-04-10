/* eslint-disable react/style-prop-object */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

import Currency from '../../units/Currency'

class TotalCost extends Component {
  render () {
    const {
      buildCost,
      landCost,
      total
    } = this.props
    return (
      <Well>
        <h1>Total Cost</h1>
        <p>
          Build cost: <strong><Currency value={buildCost} /></strong>
        </p>
        <p>
          Land cost: <strong><Currency value={landCost} /></strong>
        </p>
        <br />
        <p>
          Total: <strong><Currency value={total} /></strong>
        </p>
      </Well>
    )
  }
}

TotalCost.defaultProps = {
  buildCost: 0,
  total: 0
}

TotalCost.propTypes = {
  buildCost: PropTypes.number,
  total: PropTypes.number
}

export default TotalCost
