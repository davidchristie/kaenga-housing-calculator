import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'

import Info from '../../components/Info'
import yearlyInterestCost from '../../models/yearly-interest-cost'
import yearlyMaintenanceCost from '../../models/yearly-maintenance-cost'
import yearlyPowerCost from '../../models/yearly-power-cost'
import yearlyTotalCost from '../../models/yearly-total-cost'
import yearlyTransportCost from '../../models/yearly-transport-cost'
import {
  getCheapestSelectedSuburb,
  getMostExpensiveSelectedSuburb
} from '../../selectors/suburbs'

class Interest extends Component {
  render () {
    const data = {
      labels: [
        this.props.minSuburb,
        this.props.maxSuburb
      ],
      datasets: [
        {
          label: 'Our project',
          backgroundColor: 'rgba(130,50,50,0.2)',
          borderColor: 'rgba(130,50,50,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.interest.min.value),
            Math.round(this.props.interest.max.value)
          ],
          hoverBackgroundColor: 'rgba(130,50,50,0.4)',
          hoverBorderColor: 'rgba(130,50,50,1)'
        },
        {
          label: 'Average existing 3 bedroom house',
          backgroundColor: 'rgba(50,130,50,0.2)',
          borderColor: 'rgba(50,130,50,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.interest.min.average),
            Math.round(this.props.interest.max.average)
          ],
          hoverBackgroundColor: 'rgba(50,130,50,0.4)',
          hoverBorderColor: 'rgba(50,130,50,1)'
        }
      ]
    }
    return (
      <div>
        <h4>Interest <Info>At 20% deposit.</Info></h4>
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
            },
            tooltips: {
              callbacks: {
                label: (tooltipItems, data) => {
                  return '$' + tooltipItems.yLabel
                    .toString()
                    .split(/(?=(?:...)*$)/)
                    .join(',')
                }
              },
              enabled: true,
              mode: 'single'
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
      interest: yearlyInterestCost(state),
      maintenance: yearlyMaintenanceCost(state),
      maxSuburb: getMostExpensiveSelectedSuburb(state).name,
      minSuburb: getCheapestSelectedSuburb(state).name,
      power: yearlyPowerCost(state),
      total: yearlyTotalCost(state),
      transport: yearlyTransportCost(state)
    }
  }
)(Interest)
