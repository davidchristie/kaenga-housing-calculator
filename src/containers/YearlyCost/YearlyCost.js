import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

import Interest from './Interest'
import Other from './Other'

class YearlyCost extends Component {
  render () {
    return (
      <Well>
        <h3>Yearly Cost</h3>
        <Interest />
        <Other />
      </Well>
    )
  }
}

export default YearlyCost
