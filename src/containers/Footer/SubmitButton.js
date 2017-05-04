import equal from 'deep-equal'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { postRegistration } from '../../actions/register'
import isValidInput from '../../models/is-valid-input'

class SubmitButton extends Component {
  render () {
    const {
      disabled,
      hasChanged,
      hasRegistered,
      postRegistration
    } = this.props
    console.log(this.props)
    const show = !hasRegistered || hasChanged
    if (show) {
      return (
        <Button disabled={disabled} onClick={postRegistration}>
          {hasRegistered ? 'Re-submit' : 'Submit'}
        </Button>
      )
    } else {
      return null
    }
  }
}

export default connect(
  state => {
    return {
      disabled: !isValidInput(state),
      hasChanged: !equal(state.form, state.submittedData),
      hasRegistered: state.hasRegistered
    }
  },
  dispatch => {
    return {
      postRegistration: () => dispatch(postRegistration())
    }
  }
)(SubmitButton)
