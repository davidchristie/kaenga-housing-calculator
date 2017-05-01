import { Field, reduxForm } from 'redux-form'

import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

import Checkbox from '../components/controls/Checkbox'
import NumberInput from '../components/controls/NumberInput'
import Anchor from '../components/layout/Anchor'
import Tip from '../components/misc/Tip'

class DesignForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <Anchor id='design' />
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
            inline
            label='Shared guest studio'
            name='guestStudio'
          />
          {` `}
          <Tip style={{fontSize: '1.8em'}}>
            Sharing a guest studio with others is significantly cheaper than having your own guest room. If you decide to do this, make sure to reduce the number of bedrooms you need above
          </Tip>
        </Panel>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.occupants) {
    errors.occupants = 'Required'
  } else if (values.occupants < 1) {
    errors.occupants = 'Must have at least one occupant'
  }
  if (!values.bedrooms) {
    errors.bedrooms = 'Required'
  } else if (values.bedrooms < 1) {
    errors.bedrooms = 'Must have at least one bedroom'
  }
  if (!values.bathrooms) {
    errors.bathrooms = 'Required'
  } else if (values.bathrooms < 1) {
    errors.bathrooms = 'Must have at least one bathroom'
  }
  return errors
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'design',
  validate
})(DesignForm)
