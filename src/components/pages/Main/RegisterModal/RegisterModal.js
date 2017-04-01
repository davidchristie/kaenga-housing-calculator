import React, { Component, PropTypes } from 'react'
import { Modal } from 'react-bootstrap'

import Register from '../../../../containers/forms/Register'

class RegisterModal extends Component {
  render () {
    const {
      hideRegisterForm,
      registerFormOpen
    } = this.props
    return (
      <Modal onHide={hideRegisterForm} show={registerFormOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>
    )
  }
}

RegisterModal.defaultProps = {
  hideRegisterForm: () => {},
  registerFormOpen: false
}

RegisterModal.propTypes = {
  hideRegisterForm: PropTypes.func.isRequired,
  registerFormOpen: PropTypes.bool.isRequired
}

export default RegisterModal
