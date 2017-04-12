import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Col,
  Grid,
  Jumbotron,
  Panel
} from 'react-bootstrap'

import HomeForm from '../../../containers/HomeForm'
import HousingType from '../../../containers/forms/HousingType'
import Location from '../../../containers/forms/Location'
import Occupants from '../../../containers/forms/Occupants'
import Sustainability from '../../../containers/forms/Sustainability'
import Transport from '../../../containers/forms/Transport'
import Hobbies from '../../../containers/HobbiesForm'
import AboutSection from './AboutSection'
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
            <h1>Home Builder</h1>
            <AboutSection />
          </Jumbotron>
          <Location />
          <HousingType />
          <Occupants />
          <HomeForm />
          <Sustainability />
          <Transport />
          <Hobbies />
          <Panel className='Main-register'>
            <Button
              bsSize='large'
              bsStyle='success'
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
