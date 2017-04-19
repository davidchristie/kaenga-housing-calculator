import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class SelectOne extends Component {
  render () {
    const {
      input: { onChange, value },
      options
    } = this.props
    return (
      <div>
        {options.map((option, index) => {
          return (
            <Button
              active={value === option.value}
              key={index}
              onClick={() => onChange(option.value)}
            >
              {option.text}
            </Button>
          )
        })}
      </div>
    )
  }
}

SelectOne.defaultProps = {
  input: {}
}

SelectOne.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired
}

export default SelectOne
