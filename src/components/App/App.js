import React, { Component, PropTypes } from 'react'
import { Grid, Navbar, Panel } from 'react-bootstrap'

import CheapestSuburb from '../../containers/CheapestSuburb'
import HomeFloorspace from '../../containers/HomeFloorspace'
import HomeForm from '../HomeForm'
import LocationForm from '../LocationForm'
import SharingForm from '../SharingForm'

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
          <Panel header='Home'>
            <HomeForm />
          </Panel>
          <HomeFloorspace />
          <Panel header='Sharing'>
            <SharingForm />
          </Panel>
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
