import React, { Component, PropTypes } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup
} from 'react-bootstrap'

class SizeField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <FormGroup>
        <ControlLabel>How big is the bedroom?</ControlLabel>
        <FormControl
          componentClass='select'
          onChange={onChange}
          value={value}
        >
          <option value='double'>Double</option>
          <option value='single'>Single</option>
        </FormControl>
      </FormGroup>
    )
  }
}

SizeField.defaultProps = {
  input: {}
}

SizeField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }).isRequired
}

export default SizeField
