import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'

import SelectControl from '../../controls/SelectControl'

class BedroomFields extends Component {
  render () {
    const { item } = this.props
    return (
      <Field name={`${item}.size`} component={SelectControl}>
        <option value='double'>Double</option>
        <option value='single'>Single</option>
      </Field>
    )
  }
}

BedroomFields.defaultProps = {
  item: ''
}

BedroomFields.propTypes = {
  item: PropTypes.string.isRequired
}

export default BedroomFields
