import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

import Electricity from './Electricity'

export default class YearlyCost extends Component {
  render () {
    return (
      <Well>
        <h2>Yearly Cost</h2>
        <Electricity />
      </Well>
    )
  }
}
