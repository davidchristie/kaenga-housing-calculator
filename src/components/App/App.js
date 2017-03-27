import React, { Component, PropTypes } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

class App extends Component {
  componentWillMount () {
    this.props.loadSuburbs()
  }

  render () {
    return (
      <div className='App'>
        <Navbar>
          <Navbar.Header>
            <Link to='/'>
              <Navbar.Brand>Kāenga Housing Calculator</Navbar.Brand>
            </Link>
          </Navbar.Header>
          <Nav pullRight>
            <LinkContainer to='/report'>
              <NavItem>Report</NavItem>
            </LinkContainer>
          </Nav>
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
