import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class CalculatedPriceModal extends Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      show: true
    }
  }

  render () {
    return (
      <Modal show={this.state.show} onHide={this.toggle}>
        <Modal.Header closeButton />
        <Modal.Body>
          <p>
            Great, we’ve calculated an estimated price. This will update as you tell us more.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsStyle='primary'
            onClick={this.toggle}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  toggle () {
    this.setState({
      show: !this.state.show
    })
  }
}
