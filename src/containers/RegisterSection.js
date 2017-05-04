import React, { Component } from 'react'
import { Button, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import { editRegistration, postRegistration } from '../actions/register'
import register from '../selectors/register'
import RegisterForm from './RegisterForm'

class RegisterSection extends Component {
  render () {
    const {
      editRegistration,
      email,
      firstName,
      lastName,
      phone,
      showRegistrationForm
    } = this.props
    if (showRegistrationForm) {
      return (
        <Panel>
          <h3>Your Details</h3>
          <p>
            Name: <strong>{firstName} {lastName}</strong>
          </p>
          <p>
            Phone: <strong>{phone}</strong>
          </p>
          <p>
            Email: <strong>{email}</strong>
          </p>
          <Button onClick={editRegistration}>Edit</Button><br />
        </Panel>
      )
    } else {
      return <RegisterForm />
    }
  }
}

export default connect(
  state => {
    return {
      ...register(state),
      showRegistrationForm: state.showRegistrationForm
    }
  },
  dispatch => {
    return {
      editRegistration: () => dispatch(editRegistration()),
      postRegistration: () => dispatch(postRegistration())
    }
  }
)(RegisterSection)
