import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import SuburbsField from './SuburbsField'

class LocationForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={SuburbsField} name='suburbs'>
          <option value='Manukau'>Manukau</option>
          <option value='Mount Eden'>Mount Eden</option>
          <option value='Onehunga'>Onehunga</option>
          <option value='Takapuna'>Takapuna</option>
        </Field>
      </form>
    )
  }
}

LocationForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'location'
})(LocationForm)
