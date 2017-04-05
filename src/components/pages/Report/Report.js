import React, { Component } from 'react'
import { Col, Grid, Jumbotron } from 'react-bootstrap'

import CheapestSuburb from '../../../containers/reports/CheapestSuburb'
import HomeFloorspace from '../../../containers/reports/HomeFloorspace'
import LivingSpace from '../../../containers/reports/LivingSpace'
import TotalCost from '../../../containers/reports/TotalCost'
import OurDesigns from './OurDesigns'

class Report extends Component {
  render () {
    return (
      <Grid className='Report'>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron className='Report-header'>
            <h1>Report</h1>
          </Jumbotron>
          <OurDesigns />
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
