import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

import Footer from '../../../containers/Footer'
import './Page.css'
import logo from './logo.png'

class Page extends Component {
  componentWillMount () {
    this.props.loadSuburbs()
  }

  render () {
    return (
      <div className='Page'>
        <Navbar fixedTop>
          <Navbar.Header>
            <Link to='/'>
              <Navbar.Brand>
                <img
                  alt='Kaenga logo'
                  src={logo}
                  style={{padding: '10px'}}
                />
              </Navbar.Brand>
            </Link>
          </Navbar.Header>
        </Navbar>
        <div style={{marginBottom: '80px'}}>
          {this.props.children}
        </div>
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
