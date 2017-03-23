import React, { Component, PropTypes } from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'
import { Field } from 'redux-form'

import SizeField from './SizeField'

class BedroomField extends Component {
  render () {
    const { index, bedroom, remove } = this.props
    return (
      <ListGroupItem>
        <h4>Bedroom #{index + 1}</h4>
        <Field
          name={`${bedroom}.size`}
          component={SizeField}
        />
        <Button onClick={remove}>
          Remove Bedroom
        </Button>
      </ListGroupItem>
    )
  }
}

BedroomField.defaultProps = {
  bedroom: '',
  index: 0
}

BedroomField.propTypes = {
  bedroom: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func
}

export default BedroomField
