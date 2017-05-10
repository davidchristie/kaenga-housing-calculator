import React, { Component } from 'react'
import {
  Glyphicon,
  Modal
} from 'react-bootstrap'

export default class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {showModal: false}
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close () {
    this.setState({showModal: false})
  }

  open () {
    this.setState({showModal: true})
  }

  render () {
    return (
      <span>
        <Glyphicon
          glyph='info-sign'
          onClick={this.open}
          style={{opacity: 0.3}}
        />
        <Modal
          bsSize='small'
          onHide={this.close}
          show={this.state.showModal}
        >
          <Modal.Header closeButton>
            <h3>Tip</h3>
          </Modal.Header>
          <Modal.Body style={{fontSize: '1.4em'}}>
            {this.props.children}
          </Modal.Body>
        </Modal>
      </span>
    )
  }
}
