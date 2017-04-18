import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Col, Panel, Row } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'
import Anchor from '../../layout/Anchor'
import Tip from '../../misc/Tip'

class Transport extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Panel>
          <Anchor id='transport' />
          <h3>
            How would you like to get to{' '}
            <Tip name='transport'>
              We choose sites that are close to public transport. We also provide onsite car sharing services
            </Tip>
          </h3>
          <Row>
            <Col md={6}>
              <Field
                component={Select}
                label='Work and school'
                name='commute'
              >
                <option disabled hidden value=''>Please select...</option>
                <option value='publicTransport'>
                  Public transport, walk, or cycle
                </option>
                <option value='carPooling'>
                  Car pool
                </option>
                <option value='car'>
                  Use our own car
                </option>
              </Field>
            </Col>
            <Col md={6}>
              <Field
                component={Select}
                label='Other places'
                name='needCar'
              >
                <option disabled hidden value=''>Please select...</option>
                <option value='mostDays'>
                  We’ll need to use a car most days
                </option>
                <option value='onceOrTwice'>
                  We’ll need a car once or twice a week
                </option>
                <option value='lessThanOnce'>
                  We’ll need a car less than once a week
                </option>
              </Field>
            </Col>
          </Row>
        </Panel>
      </form>
    )
  }
}

Transport.defaultProps = {
  suburbs: []
}

Transport.propTypes = {
  handleSubmit: PropTypes.func,
  suburbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Transport
