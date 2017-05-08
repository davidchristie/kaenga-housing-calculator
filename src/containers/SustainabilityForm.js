import React, { Component } from 'react'
import { FormGroup, Panel } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import Select from '../components/controls/Select'
import Anchor from '../components/layout/Anchor'
import Tip from '../components/Tip'

class SustainabilityForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <Anchor id='sustainability' />
          <h3>
            Sustainability{' '}
            <Tip name='sustainability'>
              Our buildings already provide technology
            </Tip>
          </h3>
          <FormGroup>
            <Field component={Select} name='level'>
              <option disabled hidden value=''>Please select...</option>
              <option value='high'>
                I want my home to be built to the highest environmental standard
              </option>
              <option value='medium'>
                I want to invest a little upfront to save money in the long run
              </option>
              <option value='low'>
                I need to minimize the upfront cost of housing
              </option>
            </Field>
          </FormGroup>
        </Panel>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.level) {
    errors.level = 'Required'
  }
  return errors
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'sustainability',
  initialValues: {
    level: ''
  },
  validate
})(SustainabilityForm)
