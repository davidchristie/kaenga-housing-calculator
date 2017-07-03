import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'

import hideCalculatedPriceModal from '../../actions/hideCalculatedPriceModal'

class CalculatedPriceModal extends Component {
  render () {
    return (
      <Modal show={this.props.show} onHide={this.props.toggle}>
        <Modal.Header closeButton />
        <Modal.Body>
          <p>
            Great, we’ve calculated an estimated price. This will update as you tell us more.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsStyle='primary'
            onClick={this.props.hide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const withState = connect(
  state => ({
    show: state.showCalculatedPriceModal
  }),
  dispatch => ({
    hide: () => dispatch(hideCalculatedPriceModal())
  })
)

export default withState(CalculatedPriceModal)
