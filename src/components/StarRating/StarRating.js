import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ControlLabel, FormGroup, HelpBlock } from 'react-bootstrap'

import blackStar from './black-star.svg'
import goldStar from './gold-star.svg'

const NUMBER_OF_STARS = 5

class StarRating extends Component {
  render () {
    const {
      input: {
        onChange,
        value
      },
      label,
      meta: {
        error
      }
    } = this.props
    const stars = []
    for (let i = 1; i <= NUMBER_OF_STARS; i++) {
      stars.push(
        <img
          key={i}
          onClick={() => onChange(i)}
          src={i <= value ? goldStar : blackStar}
          width={30}
        />
      )
    }
    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>
        {stars}
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

StarRating.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.number
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string
  }).isRequired
}

export default StarRating
