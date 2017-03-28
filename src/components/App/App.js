import React, { Component, PropTypes } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

import Currency from '../units/Currency'
import './App.css'
import Footer from './Footer'

class App extends Component {
  componentWillMount () {
    this.props.loadSuburbs()
  }

  render () {
    const { totalCost } = this.props
    return (
      <div className='App'>
        <Navbar fixedTop>
          <Navbar.Header>
            <Link to='/'>
              <Navbar.Brand>Kāenga</Navbar.Brand>
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle='tabs' pullRight>
              <LinkContainer to='/report'>
                <NavItem>
                  <span>Price: </span>
                  <strong>
                    <Currency value={totalCost} />
                  </strong>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
        <Footer />
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
