import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'

import { getPriceRange } from '../selectors/report'
import {
  getCheapestSelectedSuburb,
  getMostExpensiveSelectedSuburb
} from '../selectors/suburbs'

class TotalCostChart extends Component {
  render () {
    const data = {
      labels: [
        this.props.minSuburb.name,
        this.props.maxSuburb.name
      ],
      datasets: [
        {
          label: 'Our project',
          backgroundColor: 'rgba(130,50,50,0.2)',
          borderColor: 'rgba(130,50,50,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.totalCost.min),
            Math.round(this.props.totalCost.max)
          ],
          hoverBackgroundColor: 'rgba(130,50,50,0.4)',
          hoverBorderColor: 'rgba(130,50,50,1)'
        },
        {
          label: 'Average',
          backgroundColor: 'rgba(50,130,50,0.2)',
          borderColor: 'rgba(50,130,50,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.minSuburb.threeBedroomHousePrice),
            Math.round(this.props.maxSuburb.threeBedroomHousePrice)
          ],
          hoverBackgroundColor: 'rgba(50,130,50,0.4)',
          hoverBorderColor: 'rgba(50,130,50,1)'
        }
      ]
    }
    return (
      <div>
        <h3>Total Cost</h3>
        <Bar
          data={data}
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  userCallback: (value, index) => {
                    return '$' + value
                      .toString()
                      .split(/(?=(?:...)*$)/)
                      .join(',')
                  }
                }
              }]
            }
          }}
        />
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      maxSuburb: getMostExpensiveSelectedSuburb(state),
      minSuburb: getCheapestSelectedSuburb(state),
      totalCost: getPriceRange(state)
    }
  }
)(TotalCostChart)
