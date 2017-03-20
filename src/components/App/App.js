import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

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
        <LocationForm />
      </div>
    )
  }
}

export default App
