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
            <Field
              component={CheckboxControl}
              label='Laundries and outdoor areas'
              name='laundries'
            />
            <Field
              component={CheckboxControl}
              label='Guest rooms'
              name='guestRooms'
            />
            <Field
              component={CheckboxControl}
              label='Entertainment spaces'
              name='entertainment'
            />
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
