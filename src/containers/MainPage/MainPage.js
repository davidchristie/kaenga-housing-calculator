import React, { Component } from 'react'
import {
  Grid,
  Jumbotron,
  PageHeader
} from 'react-bootstrap'
import { connect } from 'react-redux'

import CommentsForm from '../CommentsForm'
import DesignForm from '../DesignForm'
import ExteriorForm from '../ExteriorForm'
import InteriorForm from '../InteriorForm'
import LifestyleForm from '../LifestyleForm'
import LocationForm from '../LocationForm'
import RegisterSection from '../RegisterSection'
import Report from '../Report'
import TransportForm from '../TransportForm'
import ValuesForm from '../ValuesForm'
import AboutSection from './AboutSection'

class MainPage extends Component {
  render () {
    return (
      <div className='MainPage'>
        <Jumbotron className='MainPage-header' style={{textAlign: 'center'}}>
          <Grid>
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
          </Grid>
        </Jumbotron>
        <Grid>
          <DesignForm />
          <LocationForm />
          <ExteriorForm />
          <InteriorForm />
          <TransportForm />
          <LifestyleForm />
          <ValuesForm />
          <CommentsForm />
          <RegisterSection />
        </Grid>
        <Report />
      </div>
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
