import React from 'react'
import { connect } from 'react-redux'
import { Col, Grid, Row } from 'react-bootstrap'

import design from '../../../selectors/design'
import YearlyCostChart from '../../YearlyCostChart'
import TotalCostChart from '../../TotalCostChart'
import Bathrooms from './Bathrooms'
import Bedrooms from './Bedrooms'
import HousingType from './HousingType'
import MinimumDeposit from './MinimumDeposit'
import Title from './Title'

class Overview extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col md={4} sm={6}>
            <MinimumDeposit />
          </Col>
          <Col md={4} sm={6}>
            <HousingType />
          </Col>
          <Col md={4} sm={6}>
            <Bedrooms />
          </Col>
          <Col md={4} sm={6}>
            <Bathrooms />
          </Col>
          <Col md={4} sm={6}>
            <Title />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TotalCostChart />
          </Col>
        </ Row>
        <YearlyCostChart />
      </Grid>
    )
  }
}

export default connect(
  state => {
    return {
      bathrooms: design(state).bathrooms || 0,
      bedrooms: design(state).bedrooms || 0
    }
  }
)(Overview)
