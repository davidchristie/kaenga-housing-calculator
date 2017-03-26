import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'

import Checkbox from '../../../controls/Checkbox'

class BathroomFields extends Component {
  render () {
    const { item } = this.props
    return (
      <div>
        <Field
          component={Checkbox}
          label='Shower'
          name={`${item}.shower`}
        />
        <Field
          component={Checkbox}
          label='Bath'
          name={`${item}.bath`}
        />
        <Field
          component={Checkbox}
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
