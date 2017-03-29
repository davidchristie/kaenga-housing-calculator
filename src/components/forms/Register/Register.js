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
          label='Email'
          name='email'
          type='email'
        />
        <Button disabled={invalid} type='submit'>Submit</Button>
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
