import React, { Component, PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import NumberInput from '../controls/NumberInput'

class OccupantsForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Occupants'>
          <Field
            component={NumberInput}
            label='How many adults will live in your new home?'
            name='adults'
          />
          <Field
            component={NumberInput}
            label='How many children will live in your new home?'
            name='teenagers'
          />
          <Field
            component={NumberInput}
            label='How many teenagers will live in your new home?'
            name='children'
          />
        </Panel>
      </form>
    )
  }
}

OccupantsForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default OccupantsForm
