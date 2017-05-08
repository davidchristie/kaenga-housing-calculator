import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import Interest from './Interest'
import Other from './Other'

class YearlyCostChart extends Component {
  render () {
    return (
      <div>
        <h3>Yearly Cost</h3>
        <Row>
          <Col md={6}>
            <Interest />
          </Col>
          <Col md={6}>
            <Other />
          </Col>
        </Row>
      </div>
    )
  }
}

export default YearlyCostChart
