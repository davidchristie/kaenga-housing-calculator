import React, { Component, PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import AdultsField from './AdultsField'
import ChildrenField from './ChildrenField'
import TeenagersField from './TeenagersField'

class OccupantsForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Occupants'>
          <Field component={AdultsField} name='adults' />
          <Field component={TeenagersField} name='teenagers' />
          <Field component={ChildrenField} name='children' />
        </Panel>
      </form>
    )
  }
}

OccupantsForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default OccupantsForm
