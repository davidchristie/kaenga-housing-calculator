import React, { Component, PropTypes } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

import OccupantField from './OccupantField'

class OccupantFields extends Component {
  render () {
    const { fields } = this.props
    return (
      <div>
        <Button onClick={() => fields.push({})}>
          Add Occupant
        </Button>
        <ListGroup>
          {fields.map((occupant, index) =>
            <OccupantField
              index={index}
              key={index}
              occupant={occupant}
              remove={() => fields.remove(index)}
            />
          )}
        </ListGroup>
      </div>
    )
  }
}

OccupantFields.defaultProps = {
  fields: []
}

OccupantFields.propTypes = {
  fields: PropTypes.array.isRequired
}

export default OccupantFields
