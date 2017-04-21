import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from 'react-bootstrap'

class Select extends Component {
  render () {
    const {
      input: { onChange, value },
      label,
      meta: {
        error
      },
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
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

Select.defaultProps = {
  input: {},
  meta: {}
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
