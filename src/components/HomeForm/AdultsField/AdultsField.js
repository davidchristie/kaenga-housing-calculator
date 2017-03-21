import React, { Component, PropTypes } from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

class AdultsField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <FormGroup>
        <ControlLabel>
          How many adults will live in your new home?
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

AdultsField.defaultProps = {
  input: {}
}

AdultsField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default AdultsField
