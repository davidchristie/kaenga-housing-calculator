import React, { Component, PropTypes } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

import BathroomField from './BathroomField'

class BathroomListField extends Component {
  render () {
    const { fields } = this.props
    return (
      <div>
        <Button onClick={() => fields.push({})}>
          Add Bathroom
        </Button>
        <ListGroup>
          {fields.map((bathroom, index) =>
            <BathroomField
              bathroom={bathroom}
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

BathroomListField.defaultProps = {
  fields: {
    map: () => null
  }
}

BathroomListField.propTypes = {
  fields: PropTypes.shape({
    map: PropTypes.func.isRequired
  }).isRequired
}

export default BathroomListField
