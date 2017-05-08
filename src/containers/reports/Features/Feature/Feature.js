import PropTypes from 'prop-types'
import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

class Feature extends React.Component {
  render () {
    const { text } = this.props
    return (
      <ListGroupItem style={{fontSize: '1.4em'}}>{text}</ListGroupItem>
    )
  }
}

Feature.propTypes = {
  text: PropTypes.string.isRequired
}

export default Feature
