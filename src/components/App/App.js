import React, { Component, PropTypes } from 'react'
import { Navbar } from 'react-bootstrap'

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
        {this.props.children}
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
