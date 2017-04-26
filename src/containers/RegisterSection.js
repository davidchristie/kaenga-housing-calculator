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
      postRegistration,
      showRegistrationForm
    } = this.props
    if (showRegistrationForm) {
      return (
        <Panel>
          <p>
            Name: <strong>{firstName} {lastName}</strong>
          </p>
          <p>
            Email: <strong>{email}</strong>
          </p>
          <Button onClick={editRegistration}>Edit</Button><br />
          <Button bsStyle='success' onClick={postRegistration}>
            Re-submit
          </Button>
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
