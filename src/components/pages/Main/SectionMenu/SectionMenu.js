import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class SectionMenu extends Component {
  render () {
    return (
      <ListGroup>
        {this.props.children}
      </ListGroup>
    )
  }
}

export default SectionMenu
