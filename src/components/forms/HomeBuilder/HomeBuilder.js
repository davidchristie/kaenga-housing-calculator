import React, { Component, PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Checkbox from '../../controls/Checkbox'
import NumberInput from '../../controls/NumberInput'

class HomeBuilder extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Home Builder'>
          <Field
            component={NumberInput}
            label='Number of occupants'
            name='occupants'
          />
          <Field
            component={NumberInput}
            label='Number of bedrooms'
            name='bedrooms'
          />
          <Field
            component={Checkbox}
            label='Shared guest studio'
            name='study'
          />
          <Field
            component={NumberInput}
            label='Bathrooms'
            name='bathrooms'
          />
          <Panel bsStyle='warning' header='Old fields'>
            <Field
              component={NumberInput}
              label='How many double bedrooms do you need?'
              name='doubleBedrooms'
            />
            <Field
              component={NumberInput}
              label='How many single bedrooms do you need?'
              name='singleBedrooms'
            />
            <Field
              component={NumberInput}
              label='How many bathrooms with a bathtub do you need?'
              name='bathtubs'
            />
            <Field
              component={NumberInput}
              label='How many bathrooms with a shower do you need?'
              name='showers'
            />
            <Field
              component={NumberInput}
              label='How many stand alone toilets do you need?'
              name='toilets'
            />
          </Panel>
        </Panel>
      </form>
    )
  }
}

HomeBuilder.propTypes = {
  handleSubmit: PropTypes.func
}

export default HomeBuilder
