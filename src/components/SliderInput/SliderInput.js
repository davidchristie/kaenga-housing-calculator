import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  ControlLabel,
  FormGroup,
  HelpBlock,
  Well
} from 'react-bootstrap'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import './SliderInput.css'

const selectedOption = props => {
  const { input: { value }, options } = props
  return options[value - 1]
}

class SliderInput extends Component {
  render () {
    const {
      input: {
        onChange,
        value
      },
      format,
      label,
      meta: {
        error
      },
      options,
      stepLabels
    } = this.props
    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>
        <Slider
          format={format}
          labels={stepLabels}
          max={options.length}
          min={options.length === 0 ? 0 : 1}
          onChange={onChange}
          tooltip={false}
          value={value}
        />
        <Well style={{fontSize: '1.4em', textAlign: 'center'}}>
          {selectedOption(this.props)}
        </Well>
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

SliderInput.defaultProps = {
  input: {},
  label: '',
  meta: {}
}

SliderInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  stepLabels: PropTypes.object
}

export default SliderInput
