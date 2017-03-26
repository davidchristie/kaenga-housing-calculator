import React, { Component, PropTypes } from 'react'
import { ControlLabel, FormGroup, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Checkbox from '../../controls/Checkbox'

class Sharing extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Sharing'>
          <FormGroup>
            <ControlLabel>Are you willing to share:</ControlLabel>
            <Field
              component={Checkbox}
              label='Laundries and outdoor areas'
              name='laundries'
            />
            <Field
              component={Checkbox}
              label='Guest rooms'
              name='guestRooms'
            />
            <Field
              component={Checkbox}
              label='Entertainment spaces'
              name='entertainment'
            />
          </FormGroup>
        </Panel>
      </form>
    )
  }
}

Sharing.propTypes = {
  handleSubmit: PropTypes.func
}

export default Sharing
