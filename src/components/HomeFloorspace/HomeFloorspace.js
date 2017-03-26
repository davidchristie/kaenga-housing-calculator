import React, { Component, PropTypes } from 'react'
import { Well } from 'react-bootstrap'

import Area from '../units/Area'

const floorspaceItem = (name, area) => {
  if (!area) return null
  return (
    <p>
      {name}: <strong><Area value={area} /></strong>
    </p>
  )
}

class HomeFloorspace extends Component {
  render () {
    const {
      bathtubs,
      doubleBedrooms,
      singleBedrooms,
      showers,
      study,
      toilets
    } = this.props
    const total = bathtubs +
      doubleBedrooms +
      singleBedrooms +
      showers +
      study +
      toilets
    const visible = total !== 0
    const style = visible ? {} : {display: 'none'}
    return (
      <Well style={style}>
        <h1>Home floorspace</h1>
        {floorspaceItem('Double bedrooms', doubleBedrooms)}
        {floorspaceItem('Single bedrooms', singleBedrooms)}
        {floorspaceItem('Study', study)}
        {floorspaceItem('Bathrooms with a bathtab', bathtubs)}
        {floorspaceItem('Bathrooms with a shower', showers)}
        {floorspaceItem('Stand-alone toilets', toilets)}
        <br />
        {floorspaceItem('Total', total)}
      </Well>
    )
  }
}

HomeFloorspace.propTypes = {
  bathtubs: PropTypes.number,
  doubleBedrooms: PropTypes.number,
  singleBedrooms: PropTypes.number,
  showers: PropTypes.number,
  study: PropTypes.number,
  toilets: PropTypes.number
}

export default HomeFloorspace
