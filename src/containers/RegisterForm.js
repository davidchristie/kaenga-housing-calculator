import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'

import { postRegistration } from '../actions/register'
import TextInput from '../components/controls/TextInput'

class RegisterForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <h3>Your Details</h3>
          <Field
            component={TextInput}
            label='First name'
            name='firstName'
          />
          <Field
            component={TextInput}
            label='Last name'
            name='lastName'
          />
          <Field
            component={TextInput}
            label='Phone number'
            name='phone'
            type='tel'
          />
          <Field
            component={TextInput}
            label='Email'
            name='email'
            type='email'
          />
          <p>
            Click submit to find out more about your ideal home. We’ll also show you what it might look like.
          </p>
          <p>
            Even better, we’ll take into account your preferences when designing future projects and give you the opportunity to buy before releasing the project to the public.
          </p>
          <p>
            <Link to='/privacy'>View our privacy statement.</Link>
          </p>
        </Panel>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export default connect(
  state => {
    const register = state.form.registry || {}
    return {
      values: register.values
    }
  },
  dispatch => {
    return {
      register: values => dispatch(postRegistration(values))
    }
  }
)(
  reduxForm({
    destroyOnUnmount: false,
    form: 'register',
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: ''
    },
    validate
  })(RegisterForm)
)
