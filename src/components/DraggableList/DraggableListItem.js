import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

class Item extends Component {
  render () {
    const { dragHandle, item, itemSelected } = this.props
    const scale = itemSelected * 0.05 + 1
    const shadow = itemSelected * 15 + 1
    return dragHandle((
      <ListGroupItem
        style={{
          boxShadow: `rgba(0, 0, 0, 0.3) 0px ${shadow}px ${2 * shadow}px 0px`,
          cursor: 'move',
          transform: `scale(${scale})`
        }}
      >
        {item.content}
      </ListGroupItem>
    ))
  }
}

Item.propTypes = {
  dragHandle: PropTypes.func.isRequired,
  item: PropTypes.shape({
    content: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  itemSelected: PropTypes.number.isRequired
}

export default Item
