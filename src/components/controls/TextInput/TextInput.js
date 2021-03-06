import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from 'react-bootstrap'

class TextInput extends Component {
  render () {
    const {
      input: { onChange, value },
      label,
      meta: { error },
      placeholder,
      type
    } = this.props
    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          type={type}
        />
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

TextInput.defaultProps = {
  input: {},
  meta: {}
}

TextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string
  }),
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default TextInput
