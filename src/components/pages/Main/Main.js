import React, { Component } from 'react'
import { Col, Grid } from 'react-bootstrap'

import HomeForm from '../../../containers/forms/Home'
import LocationForm from '../../../containers/forms/Location'
import OccupantsForm from '../../../containers/forms/Occupants'
import SharingForm from '../../../containers/forms/Sharing'
import CheapestSuburb from '../../../containers/reports/CheapestSuburb'
import HomeFloorspace from '../../../containers/reports/HomeFloorspace'
import LivingSpace from '../../../containers/reports/LivingSpace'
import TotalCost from '../../../containers/reports/TotalCost'
import HomeFormVariant1 from '../../forms/HomeVariant1'
import OccupantsFormVariant1 from '../../forms/OccupantsVariant1'

class Main extends Component {
  render () {
    return (
      <Grid>
        <Col md={6}>
          <LocationForm />
          <OccupantsForm />
          <OccupantsFormVariant1 />
          <HomeForm />
          <HomeFormVariant1 />
          <SharingForm />
        </Col>
        <Col md={6}>
          <CheapestSuburb />
          <HomeFloorspace />
          <LivingSpace />
          <TotalCost />
        </Col>
      </Grid>
    )
  }
}

export default Main
