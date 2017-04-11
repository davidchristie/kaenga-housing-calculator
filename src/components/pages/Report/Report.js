import React, { Component } from 'react'
import { Col, Grid, Jumbotron } from 'react-bootstrap'

import CheapestSuburb from '../../../containers/reports/CheapestSuburb'
import HomeFloorspace from '../../../containers/reports/HomeFloorspace'
import Features from '../../../containers/reports/Features'
import LivingSpace from '../../../containers/reports/LivingSpace'
import Overview from '../../../containers/reports/Overview'
import TotalCost from '../../../containers/reports/TotalCost'

class Report extends Component {
  render () {
    return (
      <Grid className='Report'>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron className='Report-header'>
            <h1>Your Home</h1>
          </Jumbotron>
          <Overview />
          <Features />
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
