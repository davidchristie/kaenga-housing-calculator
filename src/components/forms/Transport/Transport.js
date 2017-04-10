import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'
import Anchor from '../../layout/Anchor'
import Tip from '../../misc/Tip'

class Transport extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Panel header='Transport'>
          <Anchor id='transport' />
          <Tip name='transport'>
            We choose sites that are close to public transport. We also provide onsite car sharing services
          </Tip>
          <Field
            component={Select}
            label='Work and school'
            name='commute'
          >
            <option value='publicTransport'>
              We can use public transport, walk, or cycle
            </option>
            <option value='carPooling'>
              We are open to car pooling
            </option>
            <option value='car'>
              We need our own car
            </option>
          </Field>
          <Field
            component={Select}
            label='Other times'
            name='needCar'
          >
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
