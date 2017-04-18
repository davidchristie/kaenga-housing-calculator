import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from 'react-bootstrap'

class TextArea extends Component {
  render () {
    const {
      input: { onChange, value },
      label,
      meta: { error },
      rows,
      style
    } = this.props
    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          componentClass='textarea'
          onChange={onChange}
          rows={rows}
          value={value}
          style={style}
        />
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

TextArea.defaultProps = {
  input: {},
  meta: {}
}

TextArea.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string
}

export default TextArea
