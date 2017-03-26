import React, { Component, PropTypes } from 'react'
import { Button, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'

class Location extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Panel header='Location'>
          <h4>City</h4>
          <Button active>Auckland</Button>
          <Button disabled>Wellington</Button>
          <Button disabled>Christchurch</Button>
          <h4>Suburbs</h4>
          <Field
            component={Select}
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

Location.defaultProps = {
  suburbs: []
}

Location.propTypes = {
  handleSubmit: PropTypes.func,
  suburbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Location
