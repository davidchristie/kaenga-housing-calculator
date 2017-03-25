import React, { Component, PropTypes } from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'

class Item extends Component {
  render () {
    const {
      index,
      item,
      itemComponent: ItemComponent,
      remove
    } = this.props
    return (
      <ListGroupItem>
        <h4>#{index + 1}</h4>
        {ItemComponent ? <ItemComponent item={item} /> : null}
        <Button onClick={remove}>Remove</Button>
      </ListGroupItem>
    )
  }
}

Item.defaultProps = {
  item: '',
  index: 0
}

Item.propTypes = {
  item: PropTypes.string.isRequired,
  itemComponent: PropTypes.func,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func
}

export default Item
