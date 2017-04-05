import React, { Component, PropTypes } from 'react'
import { FormGroup, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'
import Anchor from '../../layout/Anchor'

class Sustainability extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Sustainability'>
          <Anchor id='sustainability' />
          <FormGroup>
            <Field component={Select} name='level'>
              <option value='low'>
                I’m happy to invest a little bit upfront
              </option>
              <option value='medium'>
                I want to invest a lot upfront to save money in the long run
              </option>
              <option value='high'>
                I want my home to have all the latest sustainability technology
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
