import React, { Component, PropTypes } from 'react'
import {
  Button,
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
        <Button bsStyle='info' className='pull-right'>
          <span>Tip </span>
          <Glyphicon glyph='question-sign' />
        </Button>
      </OverlayTrigger>
    )
  }
}

Tip.defaultProps = {
  name: ''
}

Tip.propTypes = {
  name: PropTypes.string.isRequired
}

export default Tip