import React, { Component } from 'react'
import { connect } from 'react-redux'

import housingType from '../../../selectors/housing-type'
import Box from './Box'

class HousingType extends Component {
  render () {
    const { values } = this.props
    const terraced = values.terracedHousing
    const apartment = Math.max(
      values.highRise,
      values.midScaleApartment,
      values.largeScaleApartment
    )
    let type = null
    if (terraced === apartment) {
      type = 'Terraced housing or apartment'
    } else if (terraced > apartment) {
      type = 'Terraced housing'
    } else {
      type = 'Apartment'
    }
    return (
      <Box>
        <h4>Housing Type</h4>
        <strong>{type}</strong>
      </Box>
    )
  }
}

export default connect(
  state => {
    return {
      values: housingType(state)
    }
  }
)(HousingType)
