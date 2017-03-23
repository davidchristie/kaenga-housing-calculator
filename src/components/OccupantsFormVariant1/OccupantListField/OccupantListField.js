import React, { Component, PropTypes } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

import OccupantField from './OccupantField'

class OccupantListField extends Component {
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

OccupantListField.defaultProps = {
  fields: {
    map: () => null
  }
}

OccupantListField.propTypes = {
  fields: PropTypes.shape({
    map: PropTypes.func.isRequired
  }).isRequired
}

export default OccupantListField
