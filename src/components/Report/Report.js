import React, { Component, PropTypes } from 'react'
import { Well } from 'react-bootstrap'

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
          Build cost: <strong>${buildCost}</strong>
        </p>
        <p>
          Land cost: <strong>${landCost}</strong>
        </p>
        <br />
        <p>
          Total: <strong>${total}</strong>
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
