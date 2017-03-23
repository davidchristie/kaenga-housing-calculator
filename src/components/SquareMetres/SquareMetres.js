/* eslint-disable react/style-prop-object */

import React, { Component, PropTypes } from 'react'
import { FormattedNumber } from 'react-intl'

class SquareMetres extends Component {
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

SquareMetres.defaultProps = {
  value: 0
}

SquareMetres.propTypes = {
  value: PropTypes.number.isRequired
}

export default SquareMetres
