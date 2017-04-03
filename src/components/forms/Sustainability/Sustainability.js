import React, { Component, PropTypes } from 'react'
import { ControlLabel, FormGroup, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'

class Sustainability extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Sustainability'>
          <FormGroup>
            <Field component={Select} name='level'>
              <option value='1'>
                I’m happy to invest a little bit upfront
              </option>
              <option value='2'>
                I want to invest a lot upfront to save money in the long run
              </option>
              <option value='3'>
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
