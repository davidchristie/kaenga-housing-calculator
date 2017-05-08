import React, { Component } from 'react'

import Interest from './Interest'
import Other from './Other'

class YearlyCostChart extends Component {
  render () {
    return (
      <div>
        <h3>Yearly Cost</h3>
        <Interest />
        <Other />
      </div>
    )
  }
}

export default YearlyCostChart
