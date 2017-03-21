import React, { Component, PropTypes } from 'react'
import { Checkbox } from 'react-bootstrap'

class EntertainmentField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <Checkbox
        onChange={onChange}
        value={value}
      >
        Entertainment spaces
      </Checkbox>
    )
  }
}

EntertainmentField.defaultProps = {
  input: {}
}

EntertainmentField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default EntertainmentField
