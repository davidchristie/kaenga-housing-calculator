import React, { Component, PropTypes } from 'react'
import { Checkbox } from 'react-bootstrap'

class LaundriesField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <Checkbox
        onChange={onChange}
        value={value}
      >
        Laundries and outdoor areas
      </Checkbox>
    )
  }
}

LaundriesField.defaultProps = {
  input: {}
}

LaundriesField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default LaundriesField
