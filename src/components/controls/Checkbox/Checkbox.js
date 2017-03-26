import React, { Component, PropTypes } from 'react'
import { Checkbox as BootstrapCheckbox } from 'react-bootstrap'

class Checkbox extends Component {
  render () {
    const { input: { onChange, value }, label } = this.props
    return (
      <BootstrapCheckbox checked={value} onChange={onChange}>
        {label}
      </BootstrapCheckbox>
    )
  }
}

Checkbox.defaultProps = {
  input: {}
}

Checkbox.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string
}

export default Checkbox