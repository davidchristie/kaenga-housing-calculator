/* eslint-disable react/style-prop-object */

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FormattedNumber } from 'react-intl'

class Percentage extends Component {
  render () {
    const { value } = this.props
    return (
      <span>
        <FormattedNumber maximumFractionDigits={1} value={value} />%
      </span>
    )
  }
}

Percentage.defaultProps = {
  value: 0
}

Percentage.propTypes = {
  value: PropTypes.number.isRequired
}

export default Percentage
