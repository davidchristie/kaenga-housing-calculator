import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'

import Features from '../reports/Features'
import Overview from '../reports/Overview'
import NextSteps from './NextSteps'
import OurDesigns from './OurDesigns'

class Report extends Component {
  render () {
    const { showResults } = this.props
    if (showResults) {
      return (
        <div id='results' style={{textAlign: 'center'}}>
          <Jumbotron className='Report-header'>
            <h1>Results</h1>
          </Jumbotron>
          <Overview />
          <Features />
          <NextSteps />
          <OurDesigns />
        </div>
      )
    } else {
      return <span id='results' />
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
