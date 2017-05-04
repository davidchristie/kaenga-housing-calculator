import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { postRegistration } from '../../actions/register'

class SubmitButton extends Component {
  render () {
    return (
      <Button onClick={this.props.postRegistration}>
        Submit
      </Button>
    )
  }
}

export default connect(
  state => {
    return {}
  },
  dispatch => {
    return {
      postRegistration: () => dispatch(postRegistration())
    }
  }
)(SubmitButton)
