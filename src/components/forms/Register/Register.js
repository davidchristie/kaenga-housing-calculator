import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import { Field } from 'redux-form'

import TextInput from '../../controls/TextInput'

class Register extends Component {
  render () {
    const { handleSubmit, invalid, register } = this.props
    return (
      <form onSubmit={handleSubmit(register)}>
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
        <Button
          bsStyle='success'
          disabled={invalid}
          type='submit'
        >
          Submit
        </Button>
      </form>
    )
  }
}

Register.defaultProps = {
  handleSubmit: () => {}
}

Register.propTypes = {
  handleSubmit: PropTypes.func
}

export default Register
