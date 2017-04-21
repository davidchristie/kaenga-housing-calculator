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
      meta: { error }
    } = this.props
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
          value={value}
        />
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

NumberInput.defaultProps = {
  input: {},
  label: ''
}

NumberInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string
}

export default NumberInput
