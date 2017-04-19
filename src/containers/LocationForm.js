import React, { Component } from 'react'
import { Col, Panel, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Select from '../components/controls/Select'
import Anchor from '../components/layout/Anchor'
import Info from '../components/misc/Info'
import Tip from '../components/misc/Tip'
import location from '../selectors/location'
import { getSuburbs } from '../selectors/suburbs'

class LocationForm extends Component {
  render () {
    const { cities, regions } = this.props
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
          <h4>City</h4>
          <Field
            component={Select}
            name='city'
          >
            <option disabled hidden value=''>Please select...</option>
            {cities.map((city, index) => {
              return (
                <option key={index} value={city}>{city}</option>
              )
            })}
          </Field>
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
                {
                  regions.length === 0
                    ? null
                    : [
                      <option key={0} value='Walking distance'>
                        Walking distance
                      </option>,
                      <option key={1} value='10-20'>10-20 minutes</option>,
                      <option key={2} value='20-40'>20-40 minutes</option>,
                      <option key={3} value='40-60'>40-60 minutes</option>,
                      <option key={4} value='60+'>60+ minutes</option>
                    ]
                }
              </Field>
            </Col>
            <Col md={6}>
              <h4>Region</h4>
              <Field
                component={Select}
                multiple
                name='region'
              >
                {regions.map((region, index) => {
                  return (
                    <option key={index} value={region}>{region}</option>
                  )
                })}
              </Field>
            </Col>
          </Row>
        </Panel>
      </form>
    )
  }
}

export default connect(
  state => {
    const suburbs = getSuburbs(state)
    const cities = suburbs.map(suburb => suburb.city)
    const uniqueCities = Array.from(new Set(cities))
    const selectedCity = location(state).city
    const regions = suburbs
      .filter(suburb => suburb.city === selectedCity)
      .map(suburb => suburb.region)
    const uniqueRegions = Array.from(new Set(regions))
    return {
      cities: uniqueCities,
      regions: uniqueRegions
    }
  }
)(
  reduxForm({
    destroyOnUnmount: false,
    form: 'location',
    initialValues: {
      city: '',
      commute: [],
      region: []
    }
  })(LocationForm)
)
