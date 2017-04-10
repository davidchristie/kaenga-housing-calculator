import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

class Feature extends React.Component {
  render () {
    const { text } = this.props
    return (
      <ListGroupItem>{text}</ListGroupItem>
    )
  }
}

export default Feature
