import React, { Component, PropTypes } from 'react'
import { Col, Grid, Navbar } from 'react-bootstrap'

import CheapestSuburb from '../../containers/CheapestSuburb'
import HomeForm from '../../containers/forms/Home'
import LocationForm from '../../containers/forms/Location'
import OccupantsForm from '../../containers/forms/Occupants'
import SharingForm from '../../containers/forms/Sharing'
import HomeFloorspace from '../../containers/HomeFloorspace'
import LivingSpace from '../../containers/LivingSpace'
import Report from '../../containers/Report'
import HomeVariant1 from '../forms/HomeVariant1'
import OccupantsFormVariant1 from '../forms/OccupantsVariant1'

class App extends Component {
  componentWillMount () {
    this.props.loadSuburbs()
  }

  render () {
    return (
      <div className='App'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Kāenga Housing Calculator</Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Col md={6}>
            <LocationForm />
            <OccupantsForm />
            <OccupantsFormVariant1 />
            <HomeForm />
            <HomeVariant1 />
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
