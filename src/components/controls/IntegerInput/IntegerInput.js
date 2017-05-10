import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  ControlLabel,
  FormGroup,
  Glyphicon,
  HelpBlock
} from 'react-bootstrap'

class NumberInput extends Component {
  render () {
    const {
      input: { onChange, value },
      label,
      max,
      meta: { error },
      min
    } = this.props
    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>
        <div>
          <Button
            disabled={value <= min}
            onClick={() => onChange(value - 1)}
          >
            <Glyphicon glyph='minus' />
          </Button>
          <span style={{fontSize: '1.6em', margin: '10px'}}>
            <strong>
              {value}
            </strong>
          </span>
          <Button
            disabled={value >= max}
            onClick={() => onChange(value + 1)}
          >
            <Glyphicon glyph='plus' />
          </Button>
        </div>
        {error && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }
}

NumberInput.defaultProps = {
  input: {},
  label: '',
  meta: {},
  min: 0
}

NumberInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.any
  }).isRequired,
  label: PropTypes.string,
  max: PropTypes.number,
  meta: PropTypes.shape({
    error: PropTypes.string
  }).isRequired,
  min: PropTypes.number
}

export default NumberInput
