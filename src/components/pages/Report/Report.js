import React, { Component } from 'react'
import { Col, Grid, Jumbotron } from 'react-bootstrap'

import Features from '../../../containers/reports/Features'
import Overview from '../../../containers/reports/Overview'
import OurDesigns from './OurDesigns'

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
          <OurDesigns />
        </Col>
        <Col md={2} />
      </Grid>
    )
  }
}

export default Report
