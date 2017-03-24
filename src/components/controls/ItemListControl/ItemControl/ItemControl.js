import React, { Component, PropTypes } from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'

class DefaultItemComponent extends Component {
  render () {
    return <div />
  }
}

class ItemControl extends Component {
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
        <ItemComponent item={item} />
        <Button onClick={remove}>Remove</Button>
      </ListGroupItem>
    )
  }
}

ItemControl.defaultProps = {
  item: '',
  itemComponent: DefaultItemComponent,
  index: 0
}

ItemControl.propTypes = {
  item: PropTypes.string.isRequired,
  itemComponent: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func
}

export default ItemControl
