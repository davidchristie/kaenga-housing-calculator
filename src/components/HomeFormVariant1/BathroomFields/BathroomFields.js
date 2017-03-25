import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'

import CheckboxControl from '../../controls/CheckboxControl'

class BathroomFields extends Component {
  render () {
    const { item } = this.props
    return (
      <div>
        <Field
          component={CheckboxControl}
          name={`${item}.shower`}
        >
          Shower
        </Field>
        <Field
          component={CheckboxControl}
          name={`${item}.bath`}
        >
          Bath
        </Field>
        <Field
          component={CheckboxControl}
          name={`${item}.toilet`}
        >
          Toilet
        </Field>
      </div>
    )
  }
}

BathroomFields.defaultProps = {
  item: ''
}

BathroomFields.propTypes = {
  item: PropTypes.string.isRequired
}

export default BathroomFields
