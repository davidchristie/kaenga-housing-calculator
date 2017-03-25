import React, { Component, PropTypes } from 'react'
import { Checkbox } from 'react-bootstrap'

class CheckboxControl extends Component {
  render () {
    const { input: { onChange, value }, label } = this.props
    return (
      <Checkbox checked={value} onChange={onChange}>
        {label}
      </Checkbox>
    )
  }
}

CheckboxControl.defaultProps = {
  input: {}
}

CheckboxControl.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string
}

export default CheckboxControl
