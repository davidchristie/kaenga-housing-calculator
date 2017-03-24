import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'

import SelectControl from '../../controls/SelectControl'

class OccupantFields extends Component {
  render () {
    const { item } = this.props
    return (
      <Field name={`${item}.age`} component={SelectControl}>
        <option value='adult'>Adult</option>
        <option value='teenager'>Teenager</option>
        <option value='child'>Child</option>
      </Field>
    )
  }
}

OccupantFields.defaultProps = {
  item: ''
}

OccupantFields.propTypes = {
  item: PropTypes.string.isRequired
}

export default OccupantFields
