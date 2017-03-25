import React, { Component, PropTypes } from 'react'
import { Field } from 'redux-form'

import Select from '../../controls/Select'

class OccupantFields extends Component {
  render () {
    const { item } = this.props
    return (
      <Field name={`${item}.age`} component={Select}>
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
