import React, { Component, PropTypes } from 'react'
import { Checkbox, FormGroup } from 'react-bootstrap'

class StudyField extends Component {
  render () {
    const { input: { onChange, value } } = this.props
    return (
      <FormGroup>
        <Checkbox
          onChange={onChange}
          value={Number(value)}
        >
          Do you need a study?
        </Checkbox>
      </FormGroup>
    )
  }
}

StudyField.defaultProps = {
  input: {}
}

StudyField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default StudyField
