import React, { Component, PropTypes } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup
} from 'react-bootstrap'

class NumberInputControl extends Component {
  render () {
    const { input: { onChange, value }, label } = this.props
    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>
        <FormControl
          componentClass='input'
          min={0}
          onChange={onChange}
          type='number'
          value={Number(value)}
        />
      </FormGroup>
    )
  }
}

NumberInputControl.defaultProps = {
  input: {},
  label: ''
}

NumberInputControl.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string
}

export default NumberInputControl
