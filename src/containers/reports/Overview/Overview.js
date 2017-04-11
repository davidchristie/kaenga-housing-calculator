import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Well } from 'react-bootstrap'

import { getHomeBuilderValues } from '../../../selectors/home-builder'
import PriceRange from '../PriceRange'

class Overview extends React.Component {
  render () {
    return (
      <Well>
        <h2>Overview</h2>
        <Row>
          <Col md={6}>
            <p>
              Bedrooms: {this.props.bedrooms}
            </p>
            <p>
              Price: <PriceRange />
            </p>
          </Col>
          <Col md={6}>
            <p>
              Bathrooms: {this.props.bathrooms}
            </p>
            <p>
            Savings: $zzz (aa%)
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
      bathrooms: getHomeBuilderValues(state).bathrooms || 0,
      bedrooms: getHomeBuilderValues(state).bedrooms || 0
    }
  }
)(Overview)
