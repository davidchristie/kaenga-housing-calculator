import equal from 'deep-equal'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { postRegistration } from '../../actions/register'

class SubmitButton extends Component {
  render () {
    const {
      hasChanged,
      hasRegistered,
      postRegistration
    } = this.props
    console.log(this.props)
    const show = !hasRegistered || hasChanged
    if (show) {
      return (
        <Button onClick={postRegistration}>
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
