import React, { Component, PropTypes } from 'react'
import { Checkbox } from 'react-bootstrap'

class GuestRoomsField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <Checkbox
        onChange={onChange}
        value={value}
      >
        Guest rooms
      </Checkbox>
    )
  }
}

GuestRoomsField.defaultProps = {
  input: {}
}

GuestRoomsField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default GuestRoomsField
