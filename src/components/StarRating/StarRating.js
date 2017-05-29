import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ControlLabel, FormGroup, HelpBlock } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'

class StarRating extends Component {
  render () {
    const {
      input: {
        name,
        onChange,
        value
      },
      label,
      meta: {
        error
      }
    } = this.props
    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>
        <StarRatingComponent
          name={name}
          onStarClick={onChange}
          renderStarIcon={() => <i style={{fontSize: '2em'}}>&#9733;</i>}
          starCount={5}
          value={value}
        />
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
