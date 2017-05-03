import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'

import Features from '../reports/Features'
import Overview from '../reports/Overview'
import OurDesigns from './OurDesigns'

class Report extends Component {
  render () {
    const { showResults } = this.props
    if (showResults) {
      return (
        <div>
          <Jumbotron className='Report-header'>
            <h1>Your Home</h1>
          </Jumbotron>
          <Overview />
          <Features />
          <OurDesigns />
        </div>
      )
    } else {
      return <span />
    }
  }
}

export default connect(
  state => {
    return {
      showResults: state.hasRegistered
    }
  }
)(Report)