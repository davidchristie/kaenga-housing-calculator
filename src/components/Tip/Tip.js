import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Glyphicon,
  OverlayTrigger,
  Popover
} from 'react-bootstrap'

class Tip extends Component {
  render () {
    const popover = (
      <Popover id={'Tip-' + this.props.name}>
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
        <Glyphicon glyph='info-sign' style={{...this.props.style, opacity: 0.3}} />
      </OverlayTrigger>
    )
  }
}

Tip.defaultProps = {
  name: '',
  style: {}
}

Tip.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Tip
