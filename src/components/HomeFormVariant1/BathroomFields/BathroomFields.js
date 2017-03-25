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
          label='Shower'
          name={`${item}.shower`}
        />
        <Field
          component={CheckboxControl}
          label='Bath'
          name={`${item}.bath`}
        />
        <Field
          component={CheckboxControl}
          label='Toilet'
          name={`${item}.toilet`}
        />
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
