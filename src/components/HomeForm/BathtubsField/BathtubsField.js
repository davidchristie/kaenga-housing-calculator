import React, { Component, PropTypes } from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

class BathtubsField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <FormGroup>
        <ControlLabel>
          How many bathrooms with a bathtub do you need?
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

BathtubsField.defaultProps = {
  input: {}
}

BathtubsField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default BathtubsField
