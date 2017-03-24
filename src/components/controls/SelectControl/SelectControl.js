import React, { Component, PropTypes } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup
} from 'react-bootstrap'

class SelectControl extends Component {
  render () {
    const {
      input: { onChange, value },
      label,
      multiple
    } = this.props
    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          componentClass='select'
          multiple={multiple}
          onChange={onChange}
          value={value}
        >
          {this.props.children}
        </FormControl>
      </FormGroup>
    )
  }
}

SelectControl.defaultProps = {
  input: {}
}

SelectControl.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool
}

export default SelectControl
