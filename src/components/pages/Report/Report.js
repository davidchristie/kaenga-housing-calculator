import React, { Component } from 'react'
import { Col, Grid } from 'react-bootstrap'

import CheapestSuburb from '../../../containers/reports/CheapestSuburb'
import HomeFloorspace from '../../../containers/reports/HomeFloorspace'
import LivingSpace from '../../../containers/reports/LivingSpace'
import TotalCost from '../../../containers/reports/TotalCost'

class Report extends Component {
  render () {
    return (
      <Grid>
        <Col md={2} />
        <Col md={8}>
          <CheapestSuburb />
          <HomeFloorspace />
          <LivingSpace />
          <TotalCost />
        </Col>
        <Col md={2} />
      </Grid>
    )
  }
}

export default Report
