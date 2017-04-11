import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Col, Panel, Row } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'
import Anchor from '../../layout/Anchor'
import Info from '../../misc/Info'
import Tip from '../../misc/Tip'

class Location extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Panel>
          <Anchor id='location' />
          <h3>
            Location{' '}
            <Tip name='more-locations'>
              The more locations you are willing to live, the easier it will be to find you a home.
            </Tip>
          </h3>
          <Button active>Auckland</Button>
          <Button disabled>Wellington</Button>
          <Button disabled>Christchurch</Button>
          <Row>
            <Col md={6}>
              <h4>
                Commute{' '}
                <Info>
                  The time it takes to travel to the city in moderate traffic
                </Info>
              </h4>
              <Field
                component={Select}
                multiple
                name='commute'
              >
                <option value='Walking distance'>Walking distance</option>
                <option value='5m-20m'>5-20 minutes</option>
                <option value='21m-40m'>20-40 minutes</option>
                <option value='41m-60m'>40-60 minutes</option>
              </Field>
            </Col>
            <Col md={6}>
              <h4>Region</h4>
              <Field
                component={Select}
                multiple
                name='region'
              >
                <option value='Central'>Central</option>
                <option value='North'>North</option>
                <option value='East'>East</option>
                <option value='South'>South</option>
                <option value='West'>West</option>
              </Field>
            </Col>
          </Row>
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
