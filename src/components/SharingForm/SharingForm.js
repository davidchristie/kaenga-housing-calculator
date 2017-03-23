import React, { Component, PropTypes } from 'react'
import { ControlLabel, FormGroup, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import GuestRoomsField from './GuestRoomsField'
import EntertainmentField from './EntertainmentField'
import LaundriesField from './LaundriesField'

class SharingForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Sharing'>
          <FormGroup>
            <ControlLabel>Are you willing to share:</ControlLabel>
            <Field component={LaundriesField} name='laundries' />
            <Field component={GuestRoomsField} name='guestRooms' />
            <Field component={EntertainmentField} name='entertainment' />
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
