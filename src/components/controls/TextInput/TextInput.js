import React, { Component, PropTypes } from 'react'
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
      type
    } = this.props
    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl onChange={onChange} type={type} value={value} />
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
  label: PropTypes.string
}

export default TextInput