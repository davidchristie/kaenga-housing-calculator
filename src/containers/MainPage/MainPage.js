import React, { Component } from 'react'
import {
  Col,
  Grid,
  Jumbotron,
  PageHeader
} from 'react-bootstrap'
import { connect } from 'react-redux'

import CommentsForm from '../CommentsForm'
import DesignForm from '../DesignForm'
import HousingTypeForm from '../HousingTypeForm'
import LifestyleForm from '../LifestyleForm'
import LocationForm from '../LocationForm'
import RegisterSection from '../RegisterSection'
import Report from '../Report'
import SustainabilityForm from '../SustainabilityForm'
import TransportForm from '../TransportForm'
import AboutSection from './AboutSection'
import './MainPage.css'

class MainPage extends Component {
  render () {
    return (
      <Grid className='MainPage'>
        <Col md={1} />
        <Col md={10}>
          <Jumbotron className='MainPage-header' style={{textAlign: 'center'}}>
            <PageHeader>
              <div>
                Kaenga Home Builder
              </div>
              <hr />
              <p style={{fontSize: '0.6em'}}>
                Design a home that meets your needs and fits your budget
              </p>
            </PageHeader>
            <AboutSection />
          </Jumbotron>
          <DesignForm />
          <LocationForm />
          <HousingTypeForm />
          <SustainabilityForm />
          <TransportForm />
          <LifestyleForm />
          <CommentsForm />
          <RegisterSection />
          <Report />
        </Col>
        <Col md={1} />
      </Grid>
    )
  }
}

export default connect(
  state => {
    return {
      registerFormOpen: state.registerFormOpen
    }
  }
)(MainPage)
