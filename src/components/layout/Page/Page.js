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
    const { range } = this.props
    return (
      <div className='Page'>
        <Navbar fixedTop>
          <Navbar.Header>
            <Link to='/'>
              <Navbar.Brand>
                <img alt='Kaenga logo' style={{height: '80px'}} src={logo} />
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
                    <Currency value={range.min} />
                    -
                    <Currency value={range.max} />
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
  loadSuburbs: () => {},
  range: {max: 0, min: 0}
}

Page.propTypes = {
  loadSuburbs: PropTypes.func.isRequired,
  range: PropTypes.shape({
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired
  }).isRequired
}

export default Page
