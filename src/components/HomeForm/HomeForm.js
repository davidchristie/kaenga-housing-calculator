import React, { Component, PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import CheckboxControl from '../controls/CheckboxControl'
import NumberInputControl from '../controls/NumberInputControl'

class HomeForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Home'>
          <Field
            component={NumberInputControl}
            label='How many double bedrooms do you need?'
            name='doubleBedrooms'
          />
          <Field
            component={NumberInputControl}
            label='How many single bedrooms do you need?'
            name='singleBedrooms'
          />
          <Field
            component={CheckboxControl}
            label='Do you need a study?'
            name='study'
          />
          <Field
            component={NumberInputControl}
            label='How many bathrooms with a bathtub do you need?'
            name='bathtubs'
          />
          <Field
            component={NumberInputControl}
            label='How many bathrooms with a shower do you need?'
            name='showers'
          />
          <Field
            component={NumberInputControl}
            label='How many stand alone toilets do you need?'
            name='toilets'
          />
        </Panel>
      </form>
    )
  }
}

HomeForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default HomeForm
