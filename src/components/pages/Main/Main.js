import React, { Component } from 'react'
import { Button, Col, Grid, Jumbotron } from 'react-bootstrap'

import Home from '../../../containers/forms/Home'
import Location from '../../../containers/forms/Location'
import Occupants from '../../../containers/forms/Occupants'
import Sharing from '../../../containers/forms/Sharing'
import HomeVariant1 from '../../forms/HomeVariant1'
import OccupantsVariant1 from '../../forms/OccupantsVariant1'
import './Main.css'

class Main extends Component {
  render () {
    return (
      <Grid className='Main'>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron className='Main-header'>
            <h1>Housing Calculator</h1>
            <p>
              <Button
                bsStyle='primary'
                href='http://www.kaenga.com/'
              >
                Learn more
              </Button>
            </p>
          </Jumbotron>
          <Location />
          <Occupants />
          <OccupantsVariant1 />
          <Home />
          <HomeVariant1 />
          <Sharing />
        </Col>
        <Col md={2} />
      </Grid>
    )
  }
}

export default Main
