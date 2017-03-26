/* eslint-disable react/style-prop-object */

import React, { Component, PropTypes } from 'react'
import { FormattedNumber } from 'react-intl'

class Currency extends Component {
  render () {
    const { type, value } = this.props
    return (
      <FormattedNumber currency={type} style='currency' value={value} />
    )
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
