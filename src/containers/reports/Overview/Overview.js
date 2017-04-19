import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Well } from 'react-bootstrap'

import design from '../../../selectors/design'
import housingType from '../../../selectors/housing-type'
import PriceRangeWithSuburbs from '../../PriceRangeWithSuburbs'

class Overview extends React.Component {
  render () {
    return (
      <Well>
        <h2>Overview</h2>
        <Row>
          <Col md={6}>
            <p>
              Price: <PriceRangeWithSuburbs />
            </p>
            <p>
              House Type: <strong>{this.props.houseType}</strong>
            </p>
            <p>
              Bedrooms: <strong>{this.props.bedrooms}</strong>
            </p>
          </Col>
          <Col md={6}>
            <p>
              Savings: <strong>$zzz (aa%)</strong>
            </p>
            <p>
              Title: <strong>Freehold Unit Title</strong>
            </p>
            <p>
              Bathrooms: <strong>{this.props.bathrooms}</strong>
            </p>
          </Col>
        </ Row>
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
