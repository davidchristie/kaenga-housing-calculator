import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'

import yearlyMaintenanceCost from '../../models/yearly-maintenance-cost'
import yearlyPowerCost from '../../models/yearly-power-cost'
import yearlyTransportCost from '../../models/yearly-transport-cost'

class Other extends Component {
  render () {
    const data = {
      labels: [
        'Our project',
        'Average'
      ],
      datasets: [
        {
          label: 'Transport',
          backgroundColor: 'rgba(132,99,255,0.2)',
          borderColor: 'rgba(132,99,255,1)',
          borderWidth: 1,
          data: [
            Math.round(this.props.transport.value),
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
            Math.round(this.props.power.average)
          ],
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)'
        }
      ]
    }
    return (
      <div>
        <h4>Other</h4>
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
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      maintenance: yearlyMaintenanceCost(state),
      power: yearlyPowerCost(state),
      transport: yearlyTransportCost(state)
    }
  }
)(Other)
