import React, { Component, PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../controls/Select'

class LocationForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Panel header='Location'>
          <Field
            component={Select}
            label='Suburbs'
            multiple
            name='suburbs'
          >
            {this.props.suburbs.map((suburb, index) => {
              return (
                <option key={index} value={suburb.name}>
                  {suburb.name}
                </option>
              )
            })}
          </Field>
        </Panel>
      </form>
    )
  }
}

LocationForm.defaultProps = {
  suburbs: []
}

LocationForm.propTypes = {
  handleSubmit: PropTypes.func,
  suburbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default LocationForm
