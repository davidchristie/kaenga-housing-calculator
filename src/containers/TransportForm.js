import React, { Component } from 'react'
import { Col, Panel, Row } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import Select from '../components/controls/Select'
import Anchor from '../components/layout/Anchor'
import Tip from '../components/misc/Tip'

class TransportForm extends Component {
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
                <option value='carPool'>
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

const validate = values => {
  const errors = {}
  if (!values.commute) {
    errors.commute = 'Required'
  }
  if (!values.needCar) {
    errors.needCar = 'Required'
  }
  return errors
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'transport',
  validate
})(TransportForm)
