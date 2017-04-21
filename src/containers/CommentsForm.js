import { Field, reduxForm } from 'redux-form'

import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

import TextArea from '../components/controls/TextArea'

class CommentsForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <h3>Any Comments/Questions?</h3>
          <Field
            component={TextArea}
            name='text'
            placeholder='Type here'
            rows={4}
            style={{resize: 'none'}}
          />
        </Panel>
      </form>
    )
  }
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'comments'
})(CommentsForm)
