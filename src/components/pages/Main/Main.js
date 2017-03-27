import React, { Component } from 'react'
import { Col, Grid } from 'react-bootstrap'

import Home from '../../../containers/forms/Home'
import Location from '../../../containers/forms/Location'
import Occupants from '../../../containers/forms/Occupants'
import Sharing from '../../../containers/forms/Sharing'
import HomeVariant1 from '../../forms/HomeVariant1'
import OccupantsVariant1 from '../../forms/OccupantsVariant1'

class Main extends Component {
  render () {
    return (
      <Grid>
        <Col md={2} />
        <Col md={8}>
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
