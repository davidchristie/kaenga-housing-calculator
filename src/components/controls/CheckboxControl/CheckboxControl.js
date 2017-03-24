import React, { Component, PropTypes } from 'react'
import { Checkbox } from 'react-bootstrap'

class CheckboxControl extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <Checkbox
        onChange={onChange}
        value={value}
      >
        {this.props.children}
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
  }).isRequired
}

export default CheckboxControl
