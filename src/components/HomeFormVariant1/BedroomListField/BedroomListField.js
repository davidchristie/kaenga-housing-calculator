import React, { Component, PropTypes } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

import BedroomField from './BedroomField'

class BedroomListField extends Component {
  render () {
    const { fields } = this.props
    return (
      <div>
        <Button onClick={() => fields.push({})}>
          Add Bedroom
        </Button>
        <ListGroup>
          {fields.map((bedroom, index) =>
            <BedroomField
              bedroom={bedroom}
              index={index}
              key={index}
              remove={() => fields.remove(index)}
            />
          )}
        </ListGroup>
      </div>
    )
  }
}

BedroomListField.defaultProps = {
  fields: {
    map: () => null
  }
}

BedroomListField.propTypes = {
  fields: PropTypes.shape({
    map: PropTypes.func.isRequired
  }).isRequired
}

export default BedroomListField
