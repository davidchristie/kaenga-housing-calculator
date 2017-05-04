import React, { Component } from 'react'
import { Well } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'

import yearlyInterestCost from '../../models/yearly-interest-cost'
import yearlyMaintenanceCost from '../../models/yearly-maintenance-cost'
import yearlyPowerCost from '../../models/yearly-power-cost'
import yearlyTotalCost from '../../models/yearly-total-cost'
import yearlyTransportCost from '../../models/yearly-transport-cost'
import {
  getCheapestSelectedSuburb,
  getMostExpensiveSelectedSuburb
} from '../../selectors/suburbs'

class YearlyCost extends Component {
  render () {
    const data = {
      labels: [
        `Our project (${this.props.minSuburb})`,
        `Our project (${this.props.maxSuburb})`,
        `Average (${this.props.minSuburb})`,
        `Average (${this.props.maxSuburb})`
      ],
      datasets: [
        {
          label: 'Interest',
          backgroundColor: 'rgba(50,130,50,0.2)',
          borderColor: 'rgba(50,130,50,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.interest.min.value),
            Math.round(this.props.interest.max.value),
            Math.round(this.props.interest.min.average),
            Math.round(this.props.interest.max.average)
          ],
          hoverBackgroundColor: 'rgba(50,130,50,0.4)',
          hoverBorderColor: 'rgba(50,130,50,1)'
        },
        {
          label: 'Transport',
          backgroundColor: 'rgba(132,99,255,0.2)',
          borderColor: 'rgba(132,99,255,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.transport.value),
            Math.round(this.props.transport.value),
            Math.round(this.props.transport.average),
            Math.round(this.props.transport.average)
          ],
          hoverBackgroundColor: 'rgba(132,99,255,0.4)',
          hoverBorderColor: 'rgba(132,99,255,1)'
        },
        {
          label: 'Maintenance',
          backgroundColor: 'rgba(132,255,99,0.2)',
          borderColor: 'rgba(132,255,99,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.maintenance.value),
            Math.round(this.props.maintenance.value),
            Math.round(this.props.maintenance.average),
            Math.round(this.props.maintenance.average)
          ],
          hoverBackgroundColor: 'rgba(132,255,99,0.4)',
          hoverBorderColor: 'rgba(132,255,99,1)'
        },
        {
          label: 'Power',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.power.value),
            Math.round(this.props.power.value),
            Math.round(this.props.power.average),
            Math.round(this.props.power.average)
          ],
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)'
        }
      ]
    }
    return (
      <Well>
        <h2>Yearly Cost</h2>
        <Bar
          data={data}
          options={{
            scales: {
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </Well>
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
)(YearlyCost)
