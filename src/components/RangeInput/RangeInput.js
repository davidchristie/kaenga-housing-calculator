import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from 'react-bootstrap'

class RangeInput extends Component {
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
          onChange={onChange}
          type='range'
          value={value}
        />
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

RangeInput.defaultProps = {
  input: {},
  label: '',
  meta: {}
}

RangeInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string
  }).isRequired
}

export default RangeInput
