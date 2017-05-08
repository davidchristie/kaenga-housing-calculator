import React, { Component } from 'react'

import Interest from './Interest'
import Maintenance from './Maintenance'

class YearlyCost extends Component {
  render () {
    return (
      <div>
        <Interest />
        <Maintenance />
      </div>
    )
  }
}

export default YearlyCost
