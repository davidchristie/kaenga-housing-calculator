import React, { Component, PropTypes } from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'
import { Field } from 'redux-form'

import AgeField from './AgeField'

class OccupantField extends Component {
  render () {
    const { index, occupant, remove } = this.props
    return (
      <ListGroupItem>
        <h4>Occupant #{index + 1}</h4>
        <Field
          name={`${occupant}.age`}
          component={AgeField}
        />
        <Button onClick={remove}>
          Remove Occupant
        </Button>
      </ListGroupItem>
    )
  }
}

OccupantField.defaultProps = {
  index: 0,
  occupant: ''
}

OccupantField.propTypes = {
  index: PropTypes.number.isRequired,
  occupant: PropTypes.string.isRequired,
  remove: PropTypes.func
}

export default OccupantField
