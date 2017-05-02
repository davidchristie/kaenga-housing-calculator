import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

import Electricity from './Electricity'
import Maintenance from './Maintenance'
import Transport from './Transport'

export default class YearlyCost extends Component {
  render () {
    return (
      <Well>
        <h2>Yearly Cost</h2>
        <Electricity />
        <Transport />
        <Maintenance />
      </Well>
    )
  }
}
