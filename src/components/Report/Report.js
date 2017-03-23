import React, { Component, PropTypes } from 'react'
import { Well } from 'react-bootstrap'

class Report extends Component {
  render () {
    const {
      total
    } = this.props
    return (
      <Well>
        <h1>Report</h1>
        <p>
          Total: <strong>${total}</strong>
        </p>
      </Well>
    )
  }
}

Report.defaultProps = {
  total: 0
}

Report.propTypes = {
  total: PropTypes.number
}

export default Report
