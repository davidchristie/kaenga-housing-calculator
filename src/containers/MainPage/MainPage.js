import React, { Component } from 'react'
import {
  Button,
  Col,
  Grid,
  Jumbotron,
  PageHeader,
  Panel
} from 'react-bootstrap'
import { connect } from 'react-redux'

import {
  hideRegisterForm,
  showRegisterForm
} from '../../actions/register'
import HousingType from '../forms/HousingType'
import Location from '../forms/Location'
import Sustainability from '../forms/Sustainability'
import Transport from '../forms/Transport'
import Comments from '../CommentsForm'
import Hobbies from '../HobbiesForm'
import DesignForm from '../DesignForm'
import AboutSection from './AboutSection'
import './MainPage.css'
import RegisterModal from './RegisterModal'

class MainPage extends Component {
  render () {
    const {
      hideRegisterForm,
      registerFormOpen,
      showRegisterForm
    } = this.props
    return (
      <Grid className='MainPage'>
        <Col md={1} />
        <Col md={10}>
          <Jumbotron className='MainPage-header'>
            <PageHeader>
              <div>
                Kaenga Home Builder
              </div>
              <small>
                Design a home that meets your needs and fits your budget
              </small>
            </PageHeader>
            <AboutSection />
          </Jumbotron>
          <Location />
          <HousingType />
          <DesignForm />
          <Sustainability />
          <Transport />
          <Hobbies />
          <Comments />
          <Panel className='MainPage-register'>
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
)(MainPage)
