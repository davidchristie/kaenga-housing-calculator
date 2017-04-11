import { Field, reduxForm } from 'redux-form'

import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

import Checkbox from '../components/controls/Checkbox'
import NumberInput from '../components/controls/NumberInput'
import Anchor from '../components/layout/Anchor'
import Tip from '../components/misc/Tip'

class HomeForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Home Builder'>
          <Anchor id='home-builder' />
          <h3>Home Design</h3>
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
            component={NumberInput}
            label='Bathrooms'
            name='bathrooms'
          />
          <Field
            component={Checkbox}
            label='Shared guest studio'
            name='study'
          />
          <Tip>
            Sharing a guest studio with others is significantly cheaper than having your own guest room. If you decide to do this, make sure to reduce the number of bedrooms you need above
          </Tip>
          <Panel
            bsStyle='warning'
            header='Old fields'
            style={{display: 'none'}}
          >
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

export default reduxForm({
  destroyOnUnmount: false,
  form: 'homeBuilder'
})(HomeForm)
