import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import { getSuburbs } from '../../models/suburbs'
import SuburbsField from './SuburbsField'

class LocationForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      suburbs: []
    }
  }

  componentWillMount () {
    getSuburbs((error, suburbs) => {
      if (error) throw error
      this.setState({
        suburbs
      })
    })
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={SuburbsField} name='suburbs'>
          {this.state.suburbs.map((suburb, index) => {
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
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'location'
})(LocationForm)
