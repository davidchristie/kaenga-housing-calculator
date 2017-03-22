import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import SuburbsField from './SuburbsField'

class LocationForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field component={SuburbsField} name='suburbs'>
          {this.props.suburbs.map((suburb, index) => {
            return (
              <option key={index} value={suburb.name}>
                {suburb.name}
              </option>
            )
          })}
        </Field>
      </form>
    )
  }
}

LocationForm.propTypes = {
  handleSubmit: PropTypes.func,
  suburbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default reduxForm({
  form: 'location'
})(LocationForm)
