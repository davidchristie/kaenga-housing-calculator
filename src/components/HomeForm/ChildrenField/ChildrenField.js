import React, { Component, PropTypes } from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

class ChildrenField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <FormGroup>
        <ControlLabel>
          How many children will live in your new home?
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

ChildrenField.defaultProps = {
  input: {}
}

ChildrenField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default ChildrenField
