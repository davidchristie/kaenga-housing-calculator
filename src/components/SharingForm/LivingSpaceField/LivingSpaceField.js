import React, { Component, PropTypes } from 'react'
import { Checkbox } from 'react-bootstrap'

class LivingSpaceField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <Checkbox
        onChange={onChange}
        value={value}
      >
        Living space (including kitchens)
      </Checkbox>
    )
  }
}

LivingSpaceField.defaultProps = {
  input: {}
}

LivingSpaceField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default LivingSpaceField
