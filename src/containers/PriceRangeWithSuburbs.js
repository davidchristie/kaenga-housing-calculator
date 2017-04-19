import React from 'react'
import { connect } from 'react-redux'

import Currency from '../components/units/Currency'
import { getReport } from '../selectors/report'
import {
  getCheapestSelectedSuburb,
  getMostExpensiveSelectedSuburb
} from '../selectors/suburbs'

class PriceRangeWithSuburbs extends React.Component {
  render () {
    const { max, min } = this.props
    if (!max || !min) {
      return <span />
    }
    return (
      <strong>
        {max.price === min.price
          ? <span><Currency value={min.price} /> ({min.suburb})</span>
          : <span>
            <Currency value={min.price} /> ({min.suburb})
            -
            <Currency value={max.price} /> ({max.suburb})
          </span>}
      </strong>
    )
  }
}

export default connect(
  state => {
    const priceRange = getReport(state).range
    const cheapestSuburb = getCheapestSelectedSuburb(state)
    const mostExpensiveSuburb = getMostExpensiveSelectedSuburb(state)
    if (!cheapestSuburb || !mostExpensiveSuburb) {
      return {}
    }
    return {
      max: {
        price: priceRange.max,
        suburb: mostExpensiveSuburb.name
      },
      min: {
        price: priceRange.min,
        suburb: cheapestSuburb.name
      }
    }
  }
)(PriceRangeWithSuburbs)
