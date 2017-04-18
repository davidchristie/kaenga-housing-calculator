import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FormGroup, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'
import Anchor from '../../layout/Anchor'
import Tip from '../../misc/Tip'

class Sustainability extends Component {
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

Sustainability.propTypes = {
  handleSubmit: PropTypes.func
}

export default Sustainability
