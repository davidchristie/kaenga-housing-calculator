import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'

import AdultsField from './AdultsField'
import ChildrenField from './ChildrenField'
import TeenagersField from './TeenagersField'

class OccupantsForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={AdultsField} name='adults' />
        <Field component={TeenagersField} name='teenagers' />
        <Field component={ChildrenField} name='children' />
      </form>
    )
  }
}

OccupantsForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default OccupantsForm
