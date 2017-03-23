import React, { Component, PropTypes } from 'react'
import { Grid, Navbar, Panel } from 'react-bootstrap'

import CheapestSuburb from '../../containers/CheapestSuburb'
import HomeFloorspace from '../../containers/HomeFloorspace'
import HomeForm from '../../containers/HomeForm'
import LivingSpace from '../../containers/LivingSpace'
import LocationForm from '../../containers/LocationForm'
import OccupantsForm from '../../containers/OccupantsForm'
import SharingForm from '../../containers/SharingForm'

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
          <Panel header='Location'>
            <LocationForm suburbs={this.props.suburbs} />
          </Panel>
          <CheapestSuburb />
          <Panel header='Occupants'>
            <OccupantsForm />
          </Panel>
          <Panel header='Home'>
            <HomeForm />
          </Panel>
          <HomeFloorspace />
          <Panel header='Sharing'>
            <SharingForm />
          </Panel>
          <LivingSpace />
        </Grid>
      </div>
    )
  }
}

App.defaultProps = {
  loadSuburbs: () => {},
  suburbs: []
}

App.propTypes = {
  loadSuburbs: PropTypes.func.isRequired,
  suburbs: PropTypes.any.isRequired
}

export default App
