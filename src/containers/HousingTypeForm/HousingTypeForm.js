import React, { Component } from 'react'
import { FormGroup, Panel } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import Select from '../../components/controls/Select'
import Anchor from '../../components/layout/Anchor'
import highRiseImage from './High rise.jpg'
import largeScaleApartmentImage from './Large scale apartment.jpeg'
import midScaleApartmentImage from './Mid scale apartment.jpg'
import terracedHousingImage from './Terraced housing.jpeg'

const list = [
  {
    content: <img src={terracedHousingImage} style={{width: '100%'}} />,
    name: 'Terraced housing'
  },
  {
    content: <img src={midScaleApartmentImage} style={{width: '100%'}} />,
    name: 'Mid scale apartment'
  },
  {
    content: <img src={largeScaleApartmentImage} style={{width: '100%'}} />,
    name: 'Large scale apartment'
  },
  {
    content: <img src={highRiseImage} style={{width: '100%'}} />,
    name: 'High rise'
  }
]

class HousingTypeForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <Anchor id='housing-type' />
          <h3>
            Type of Home
          </h3>
          <FormGroup>
            <Field component={Select} name='type'>
              <option disabled hidden value=''>Please select...</option>
              <option value='Terraced housing'>
                Terraced housing (3-10 houses with an outdoor area shared in common)
              </option>
              <option value='Low-rise apartment'>
                Low rise apartment (3 story apartment building with 12-25 units)
              </option>
            </Field>
          </FormGroup>
        </Panel>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.type) {
    errors.type = 'Required'
  }
  return errors
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'housingType',
  initialValues: {
    type: ''
  },
  validate
})(HousingTypeForm)
