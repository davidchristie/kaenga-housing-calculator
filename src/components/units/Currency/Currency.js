/* eslint-disable react/style-prop-object */

import React, { Component, PropTypes } from 'react'
import { FormattedNumber } from 'react-intl'

class Currency extends Component {
  render () {
    const { type, value } = this.props
    if (value > 1000) {
      return (
        <span>
          <FormattedNumber
            currency={type}
            maximumSignificantDigits={2}
            style='currency'
            value={value / 1000}
          />
          K
        </span>
      )
    } else {
      return (
        <FormattedNumber
          currency={type}
          maximumSignificantDigits={2}
          style='currency'
          value={value}
        />
      )
    }
  }
}

Currency.defaultProps = {
  type: 'nzd',
  value: 0
}

Currency.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default Currency
