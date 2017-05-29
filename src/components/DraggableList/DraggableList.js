import React from 'react'
import { ListGroup } from 'react-bootstrap'
import DraggableList from 'react-draggable-list'

import Item from './DraggableListItem'

class List extends React.Component {
  onListChange (newList) {
    console.log(newList.map(item => item.name))
  }

  render () {
    return (
      <ListGroup style={this.props.style}>
        <DraggableList
          itemKey='name'
          list={this.props.list}
          onMoveEnd={newList => this.onListChange(newList)}
          template={Item}
        />
      </ListGroup>
    )
  }
}

export default List
