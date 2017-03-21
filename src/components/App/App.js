import React, { Component } from 'react'
import { Grid, Navbar, Panel } from 'react-bootstrap'

import HomeForm from '../HomeForm'
import LocationForm from '../LocationForm'
import SharingForm from '../SharingForm'

class App extends Component {
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
            <LocationForm />
          </Panel>
          <Panel header='Home'>
            <HomeForm />
          </Panel>
          <Panel header='Sharing'>
            <SharingForm />
          </Panel>
        </Grid>
      </div>
    )
  }
}

export default App
