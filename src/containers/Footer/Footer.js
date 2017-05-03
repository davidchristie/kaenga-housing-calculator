import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'

import { getSelectedSuburbs } from '../../selectors/suburbs'
import PriceRange from '../reports/PriceRange'
import './Footer.css'

class Footer extends Component {
  render () {
    if (this.props.show) {
      return (
        <Navbar className='Footer' fixedBottom>
          <span style={{fontSize: '2em'}}>
            Cost Estimate: <PriceRange />
          </span>
        </Navbar>
      )
    } else {
      return <span />
    }
  }
}

Footer.propTypes = {
  show: PropTypes.bool.isRequired
}

function isValidDesign (state) {
  return !(state.form && state.form.design && state.form.design.syncErrors)
}

function isValidLocation (state) {
  return getSelectedSuburbs(state).length > 0
}

export default connect(
  state => {
    return {
      show: isValidDesign(state) && isValidLocation(state)
    }
  }
)(Footer)
