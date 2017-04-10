import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Glyphicon,
  OverlayTrigger,
  Popover
} from 'react-bootstrap'

class Info extends Component {
  render () {
    const popover = (
      <Popover id={'Info-' + this.props.name}>
        {this.props.children}
      </Popover>
    )
    return (
      <OverlayTrigger
        trigger='click'
        overlay={popover}
        placement='right'
        rootClose
      >
        <Button bsStyle='info'>
          <span>Info </span>
          <Glyphicon glyph='question-sign' />
        </Button>
      </OverlayTrigger>
    )
  }
}

Info.defaultProps = {
  name: ''
}

Info.propTypes = {
  name: PropTypes.string.isRequired
}

export default Info
