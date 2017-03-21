import React, { Component } from 'react'
import { Grid, Navbar, Panel } from 'react-bootstrap'

import HomeForm from '../HomeForm'
import LocationForm from '../LocationForm'

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
        </Grid>
      </div>
    )
  }
}

export default App
