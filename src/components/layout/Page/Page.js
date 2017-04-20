import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'

import PriceRange from '../../../containers/reports/PriceRange'
import './Page.css'
import Footer from './Footer'
import logo from './logo.png'

class Page extends Component {
  componentWillMount () {
    this.props.loadSuburbs()
  }

  render () {
    const { showPrice } = this.props
    const priceStyle = showPrice ? {} : {display: 'none'}
    return (
      <div className='Page'>
        <Navbar fixedTop>
          <Navbar.Header>
            <Link to='/'>
              <Navbar.Brand>
                <img
                  alt='Kaenga logo'
                  src={logo}
                  style={{height: '80px'}}
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem style={priceStyle}>
                <span>Price: </span>
                <PriceRange />
              </NavItem>
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
