import React, { Component, PropTypes } from 'react'
import { FormattedNumber } from 'react-intl'

class Currency extends Component {
  render () {
    const { value } = this.props
    if (value > 1000) {
      return (
        <span>
          $
          <FormattedNumber
            maximumSignificantDigits={2}
            value={value / 1000}
          />
          K
        </span>
      )
    } else {
      return (
        <span>
          $
          <FormattedNumber
            maximumSignificantDigits={2}
            value={value}
          />
        </span>
      )
    }
  }
}

Currency.defaultProps = {
  value: 0
}

Currency.propTypes = {
  value: PropTypes.number.isRequired
}

export default Currency
