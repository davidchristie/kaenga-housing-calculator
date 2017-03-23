import React, { Component, PropTypes } from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup
} from 'react-bootstrap'

class AgeField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <FormGroup>
        <ControlLabel>How old is the occupant?</ControlLabel>
        <FormControl
          componentClass='select'
          onChange={onChange}
          value={value}
        >
          <option value='adult'>Adult</option>
          <option value='teenager'>Teenager</option>
          <option value='child'>Child</option>
        </FormControl>
      </FormGroup>
    )
  }
}

AgeField.defaultProps = {
  input: {}
}

AgeField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.string
  }).isRequired
}

export default AgeField
