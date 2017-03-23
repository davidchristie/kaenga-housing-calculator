/* eslint-disable react/style-prop-object */

import React, { Component, PropTypes } from 'react'
import { Well } from 'react-bootstrap'

import Currency from '../Currency'

class Report extends Component {
  render () {
    const {
      buildCost,
      landCost,
      total
    } = this.props
    return (
      <Well>
        <h1>Report</h1>
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

Report.defaultProps = {
  buildCost: 0,
  total: 0
}

Report.propTypes = {
  buildCost: PropTypes.number,
  total: PropTypes.number
}

export default Report
