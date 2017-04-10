/* eslint-disable react/style-prop-object */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FormattedNumber } from 'react-intl'

class Area extends Component {
  render () {
    const { value } = this.props
    return (
      <span>
        <FormattedNumber
          maximumFractionDigits={1}
          value={value}
        />m<sup>2</sup>
      </span>
    )
  }
}

Area.defaultProps = {
  value: 0
}

Area.propTypes = {
  value: PropTypes.number.isRequired
}

export default Area
