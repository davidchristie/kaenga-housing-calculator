import React, { Component, PropTypes } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

import Currency from '../../units/Currency'
import './Page.css'
import Footer from './Footer'
import logo from './logo.png'

class Page extends Component {
  componentWillMount () {
    this.props.loadSuburbs()
  }

  render () {
    const { totalCost } = this.props
    return (
      <div className='Page'>
        <Navbar fixedTop>
          <Navbar.Header>
            <Link to='/'>
              <Navbar.Brand>
                <img alt='Kāenga logo' src={logo} />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle='tabs'>
              <LinkContainer to='/about'>
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
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

Page.defaultProps = {
  loadSuburbs: () => {}
}

Page.propTypes = {
  loadSuburbs: PropTypes.func.isRequired
}

export default Page
