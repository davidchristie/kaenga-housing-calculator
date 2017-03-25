import React, { Component, PropTypes } from 'react'
import { Button, ListGroup } from 'react-bootstrap'

import Item from './Item'

class ItemList extends Component {
  render () {
    const { defaultItemValues, fields, itemComponent } = this.props
    return (
      <div>
        <Button onClick={() => fields.push(defaultItemValues)}>
          Add
        </Button>
        <ListGroup>
          {fields.map((item, index) =>
            <Item
              index={index}
              item={item}
              itemComponent={itemComponent}
              key={index}
              remove={() => {
                console.log(index)
                fields.remove(index)
              }}
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

ItemList.defaultProps = {
  defaultItemValues: {},
  fields: {
    map: () => null
  }
}

ItemList.propTypes = {
  defaultItemValues: PropTypes.object.isRequired,
  fields: PropTypes.shape({
    map: PropTypes.func.isRequired
  }).isRequired,
  itemComponent: PropTypes.func
}

export default ItemList
