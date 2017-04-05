import React, { Component } from 'react'
import { Col, Grid, Panel } from 'react-bootstrap'
import { Link } from 'react-router'

import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <Grid className='Footer'>
        <Col md={2} />
        <Col md={8}>
          <Panel style={{textAlign: 'center'}}>
            <ul>
              <li>
                <Link to='/privacy'>Privacy</Link>
              </li>
            </ul>
            <strong>
              &copy; 2017 Kaenga
            </strong>
            <br />
            <strong>
              Images &copy; Noah Fagan
            </strong>
          </Panel>
        </Col>
        <Col md={2} />
      </Grid>
    )
  }
}

export default Footer
