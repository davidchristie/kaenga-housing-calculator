import React from 'react'
import { connect } from 'react-redux'
import { Col, Grid, Row, Well } from 'react-bootstrap'

import design from '../../../selectors/design'
import YearlyCostChart from '../../YearlyCostChart'
import TotalCostChart from '../../TotalCostChart'
import HousingType from './HousingType'
import MinimumDeposit from './MinimumDeposit'
import Title from './Title'

class Overview extends React.Component {
  render () {
    return (
      <Well>
        <h2 style={{textAlign: 'center'}}>Overview</h2>
        <hr />
        <Grid>
          <Row>
            <Col md={4} sm={6}>
              <MinimumDeposit />
            </Col>
            <Col md={4} sm={6}>
              <HousingType />
            </Col>
            <Col md={4} sm={6}>
              <Title />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p>
                Bedrooms: <strong>{this.props.bedrooms}</strong>
              </p>
              <p>
                Bathrooms: <strong>{this.props.bathrooms}</strong>
              </p>
            </Col>
            <Col md={6}>
              <TotalCostChart />
            </Col>
          </ Row>
          <YearlyCostChart />
        </Grid>
      </Well>
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
