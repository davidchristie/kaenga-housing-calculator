import React from 'react'
import { connect } from 'react-redux'
import { Col, Grid, Row, Well } from 'react-bootstrap'

import design from '../../../selectors/design'
import housingType from '../../../selectors/housing-type'
import PriceRangeWithSuburbs from '../../PriceRangeWithSuburbs'
import SavingsVsAverageHouse from '../../SavingsVsAverageHouse'
import YearlyCostChart from '../../YearlyCostChart'
import TotalCostChart from '../../TotalCostChart'

class Overview extends React.Component {
  render () {
    return (
      <Well>
        <Grid>
          <Row>
            <Col md={6}>
              <h3>Overview</h3>
              <p>
                Price: <PriceRangeWithSuburbs />
              </p>
              <p>
                Savings verse average house:
                <strong> <SavingsVsAverageHouse /></strong>
              </p>
              <p>
                House Type: <strong>{this.props.houseType}</strong>
              </p>
              <p>
                Title: <strong>Freehold Unit Title</strong>
              </p>
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
      bedrooms: design(state).bedrooms || 0,
      houseType: housingType(state).type || ''
    }
  }
)(Overview)
