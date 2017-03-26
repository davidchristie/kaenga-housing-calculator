import React, { Component, PropTypes } from 'react'
import { Col, Grid, Navbar } from 'react-bootstrap'

import CheapestSuburb from '../../containers/CheapestSuburb'
import HomeFloorspace from '../../containers/HomeFloorspace'
import HomeForm from '../../containers/HomeForm'
import LivingSpace from '../../containers/LivingSpace'
import LocationForm from '../../containers/forms/Location'
import OccupantsForm from '../../containers/OccupantsForm'
import Report from '../../containers/Report'
import SharingForm from '../../containers/SharingForm'
import HomeFormVariant1 from '../HomeFormVariant1'
import OccupantsFormVariant1 from '../OccupantsFormVariant1'

class App extends Component {
  componentWillMount () {
    this.props.loadSuburbs()
  }

  render () {
    return (
      <div className='App'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Kaenga Housing Calculator</Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Col md={6}>
            <LocationForm />
            <OccupantsForm />
            <OccupantsFormVariant1 />
            <HomeForm />
            <HomeFormVariant1 />
            <SharingForm />
          </Col>
          <Col md={6}>
            <CheapestSuburb />
            <HomeFloorspace />
            <LivingSpace />
            <Report />
          </Col>
        </Grid>
      </div>
    )
  }
}

App.defaultProps = {
  loadSuburbs: () => {}
}

App.propTypes = {
  loadSuburbs: PropTypes.func.isRequired
}

export default App
