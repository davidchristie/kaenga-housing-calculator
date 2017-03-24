import React, { Component, PropTypes } from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

class SuburbsField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <FormGroup>
        <ControlLabel>Suburbs</ControlLabel>
        <FormControl
          componentClass='select'
          multiple
          onChange={onChange}
          value={Array.isArray(value) ? value : []}
        >
          {this.props.children}
        </FormControl>
      </FormGroup>
    )
  }
}

SuburbsField.defaultProps = {
  input: {}
}

SuburbsField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default SuburbsField
