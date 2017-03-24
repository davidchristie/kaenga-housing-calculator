import React, { Component, PropTypes } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

import ItemControl from './ItemControl'

class ListItemControl extends Component {
  render () {
    const { defaultItemValues, fields, itemComponent } = this.props
    return (
      <div>
        <Button onClick={() => fields.push(defaultItemValues)}>
          Add
        </Button>
        <ListGroup>
          {fields.map((item, index) =>
            <ItemControl
              index={index}
              item={item}
              itemComponent={itemComponent}
              key={index}
              remove={() => fields.remove(index)}
            />
          )}
        </ListGroup>
        <Button onClick={() => fields.removeAll()}>
          Clear
        </Button>
      </div>
    )
  }
}

ListItemControl.defaultProps = {
  defaultItemValues: {},
  fields: {
    map: () => null
  }
}

ListItemControl.propTypes = {
  defaultItemValues: PropTypes.object.isRequired,
  fields: PropTypes.shape({
    map: PropTypes.func.isRequired
  }).isRequired,
  itemComponent: PropTypes.func
}

export default ListItemControl
