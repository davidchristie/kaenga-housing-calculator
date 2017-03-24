import React, { Component, PropTypes } from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'
import { Field } from 'redux-form'

import CheckboxControl from '../../../controls/CheckboxControl'

class BathroomField extends Component {
  render () {
    const { index, bathroom, remove } = this.props
    return (
      <ListGroupItem>
        <h4>Bathroom #{index + 1}</h4>
        <Field
          name={`${bathroom}.shower`}
          component={CheckboxControl}
        >
          Shower
        </Field>
        <Field
          name={`${bathroom}.bath`}
          component={CheckboxControl}
        >
          Bath
        </Field>
        <Button onClick={remove}>
          Remove Bathroom
        </Button>
      </ListGroupItem>
    )
  }
}

BathroomField.defaultProps = {
  bathroom: '',
  index: 0
}

BathroomField.propTypes = {
  bathroom: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func
}

export default BathroomField
