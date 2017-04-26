import React, { Component } from 'react'
import { Button, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import { postRegistration } from '../actions/register'
import register from '../selectors/register'
import RegisterForm from './RegisterForm'

class RegisterSection extends Component {
  render () {
    const {
      firstName,
      lastName,
      email,
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
      postRegistration: () => dispatch(postRegistration())
    }
  }
)(RegisterSection)
