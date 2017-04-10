import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup
} from 'react-bootstrap'

class Select extends Component {
  render () {
    const {
      input: { onChange, value },
      label,
      multiple
    } = this.props
    return (
      <FormGroup>
        {label ? <ControlLabel>{label}</ControlLabel> : null}
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

Select.defaultProps = {
  input: {}
}

Select.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool
}

export default Select
