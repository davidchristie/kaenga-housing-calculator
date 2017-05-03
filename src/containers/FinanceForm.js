import { Field, reduxForm } from 'redux-form'

import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

import NumberInput from '../components/controls/NumberInput'
import Anchor from '../components/layout/Anchor'

class FinanceForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(f => f)}>
        <Panel>
          <Anchor id='finance' />
          <h3>Finance</h3>
          <Field
            component={NumberInput}
            label='Percentage deposit'
            max={100}
            min={20}
            name='percentage'
            normalize={value => Math.max(Math.min(value, 100), 20)}
          />
        </Panel>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.percentage) {
    errors.percentage = 'Required'
  }
  return errors
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'finance',
  validate
})(FinanceForm)
