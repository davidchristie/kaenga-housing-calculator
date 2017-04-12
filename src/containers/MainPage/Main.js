import { connect } from 'react-redux'

import React, { Component } from 'react'
import {
  Button,
  Col,
  Grid,
  Jumbotron,
  PageHeader,
  Panel
} from 'react-bootstrap'

import {
  hideRegisterForm,
  showRegisterForm
} from '../../actions/register'
import HousingType from '../forms/HousingType'
import Location from '../forms/Location'
import Occupants from '../forms/Occupants'
import Sustainability from '../forms/Sustainability'
import Transport from '../forms/Transport'
import Hobbies from '../HobbiesForm'
import HomeForm from '../HomeForm'
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
        <Col md={1} />
        <Col md={10}>
          <Jumbotron className='Main-header'>
            <PageHeader>
              Home Builder
              <small>
                Design a home that meets your needs and fits your budget
              </small>
            </PageHeader>
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
        <Col md={1} />
        <RegisterModal
          hideRegisterForm={hideRegisterForm}
          registerFormOpen={registerFormOpen}
        />
      </Grid>
    )
  }
}

export default connect(
  state => {
    return {
      registerFormOpen: state.registerFormOpen
    }
  },
  dispatch => {
    return {
      hideRegisterForm: () => dispatch(hideRegisterForm()),
      showRegisterForm: () => dispatch(showRegisterForm())
    }
  }
)(Main)
