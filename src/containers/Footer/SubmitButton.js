import equal from 'deep-equal'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { postRegistration } from '../../actions/register'
import isValidInput from '../../models/is-valid-input'

function hasChanged (state) {
  if (!state.submittedData) {
    return false
  }
  for (const name of Object.getOwnPropertyNames(state.form)) {
    if (!equal(state.form[name].values, state.submittedData[name].values)) {
      return true
    }
  }
  return false
}

class SubmitButton extends Component {
  render () {
    const {
      disabled,
      hasChanged,
      hasRegistered,
      postRegistration
    } = this.props
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
      hasChanged: hasChanged(state),
      hasRegistered: state.hasRegistered
    }
  },
  dispatch => {
    return {
      postRegistration: () => dispatch(postRegistration())
    }
  }
)(SubmitButton)
