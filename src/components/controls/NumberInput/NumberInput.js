import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from 'react-bootstrap'

class NumberInput extends Component {
  render () {
    const {
      input: { onChange, value },
      label,
      max,
      meta: { error },
      min
    } = this.props
    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>
        <FormControl
          componentClass='input'
          max={max}
          min={min}
          onChange={onChange}
          type='number'
          value={value}
        />
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

NumberInput.defaultProps = {
  input: {},
  label: '',
  meta: {},
  min: 0
}

NumberInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string,
  max: PropTypes.number,
  meta: PropTypes.shape({
    error: PropTypes.string
  }).isRequired,
  min: PropTypes.number
}

export default NumberInput
