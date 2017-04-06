import React, { Component, PropTypes } from 'react'
import { Button, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'
import Anchor from '../../layout/Anchor'
import Tip from '../../misc/Tip'

class Location extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Panel header='Location'>
          <Anchor id='location' />
          <Tip name='more-locations'>
            The more locations you are willing to live, the easier it will be to find you a home.
          </Tip>
          <Button active>Auckland</Button>
          <Button disabled>Wellington</Button>
          <Button disabled>Christchurch</Button>
          <Field
            component={Select}
            label='Commute to city'
            multiple
            name='commute'
          >
            <option value='Walking distance'>Walking distance</option>
            <option value='5m-20m'>5m-20m</option>
            <option value='21m-40m'>21m-40m</option>
            <option value='41m-60m'>41m-60m</option>
          </Field>
          <Field
            component={Select}
            label='Region'
            multiple
            name='region'
          >
            <option value='Central'>Central</option>
            <option value='North'>North</option>
            <option value='East'>East</option>
            <option value='South'>South</option>
            <option value='West'>West</option>
          </Field>
          <Panel
            bsStyle='warning'
            header='Old fields'
            style={{display: 'none'}}
          >
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
