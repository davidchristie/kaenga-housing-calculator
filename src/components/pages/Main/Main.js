import React, { Component, PropTypes } from 'react'
import {
  Button,
  Col,
  Grid,
  Jumbotron,
  Panel
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Home from '../../../containers/forms/Home'
import Location from '../../../containers/forms/Location'
import Occupants from '../../../containers/forms/Occupants'
import Sharing from '../../../containers/forms/Sharing'
import HomeVariant1 from '../../forms/HomeVariant1'
import OccupantsVariant1 from '../../forms/OccupantsVariant1'
import './Main.css'
import RegisterModal from './RegisterModal'

class Main extends Component {
  render () {
    const {
      hideRegisterForm,
      registerFormOpen,
      showRegisterForm
    } = this.props
    return (
      <Grid className='Main'>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron className='Main-header'>
            <h1>Housing Calculator</h1>
            <p>
              <LinkContainer to='about'>
                <Button bsStyle='primary'>
                  Learn more
                </Button>
              </LinkContainer>
            </p>
          </Jumbotron>
          <Location />
          <Occupants />
          <OccupantsVariant1 />
          <Home />
          <HomeVariant1 />
          <Sharing />
          <Panel className='Main-register'>
            <Button
              bsStyle='success'
              bsSize='large'
              onClick={showRegisterForm}
            >
              Register
            </Button>
          </Panel>
        </Col>
        <Col md={2} />
        <RegisterModal
          hideRegisterForm={hideRegisterForm}
          registerFormOpen={registerFormOpen}
        />
      </Grid>
    )
  }
}

Main.defaultProps = {
  hideRegisterForm: () => {},
  registerFormOpen: false,
  showRegisterForm: () => {}
}

Main.propTypes = {
  hideRegisterForm: PropTypes.func.isRequired,
  registerFormOpen: PropTypes.bool.isRequired,
  showRegisterForm: PropTypes.func.isRequired
}

export default Main
