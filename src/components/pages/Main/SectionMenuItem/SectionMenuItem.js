import React, { Component, PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap'

class SectionMenuItem extends Component {
  render () {
    return (
      <ListGroupItem href={this.props.to}>
        {this.props.children}
      </ListGroupItem>
    )
  }
}

SectionMenuItem.propTypes = {
  to: PropTypes.string
}

export default SectionMenuItem
