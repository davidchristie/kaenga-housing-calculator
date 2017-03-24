import React, { Component, PropTypes } from 'react'
import { ControlLabel, FormGroup, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import CheckboxControl from '../controls/CheckboxControl'

class SharingForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Sharing'>
          <FormGroup>
            <ControlLabel>Are you willing to share:</ControlLabel>
            <Field component={CheckboxControl} name='laundries'>
              Laundries and outdoor areas
            </Field>
            <Field component={CheckboxControl} name='guestRooms'>
              Guest rooms
            </Field>
            <Field component={CheckboxControl} name='entertainment'>
              Entertainment spaces
            </Field>
          </FormGroup>
        </Panel>
      </form>
    )
  }
}

SharingForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default SharingForm
