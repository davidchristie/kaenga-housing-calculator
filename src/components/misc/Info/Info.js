import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
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
        placement='bottom'
        rootClose
      >
        <Glyphicon glyph='question-sign' style={{opacity: 0.3}} />
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
