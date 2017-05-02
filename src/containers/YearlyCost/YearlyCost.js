import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

import Power from './Power'
import Maintenance from './Maintenance'
import Total from './Total'
import Transport from './Transport'

export default class YearlyCost extends Component {
  render () {
    return (
      <Well>
        <h2>Yearly Cost</h2>
        <Power />
        <Transport />
        <Maintenance />
        <Total />
      </Well>
    )
  }
}
