import React, { Component } from 'react'
import { Col, Panel, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Select from '../components/controls/Select'
import Anchor from '../components/layout/Anchor'
import Info from '../components/misc/Info'
import Tip from '../components/misc/Tip'
import SelectOne from '../components/SelectOne'
import location from '../selectors/location'
import { getSelectedRegions, getSuburbs } from '../selectors/suburbs'

class LocationForm extends Component {
  render () {
    const { cities, regions, selectedCity } = this.props
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
            component={SelectOne}
            name='city'
            options={cities.map(city => {
              return {
                text: city,
                value: city
              }
            })}
          />
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
                  selectedCity
                    ? [
                      <option key={0} value='Walking distance'>
                        Walking distance
                      </option>,
                      <option key={1} value='10-20'>10-20 minutes</option>,
                      <option key={2} value='20-40'>20-40 minutes</option>,
                      <option key={3} value='40-60'>40-60 minutes</option>
                    ]
                    : null
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

const validate = values => {
  const errors = {}
  if (!values.city) {
    errors.city = 'Required'
  }
  if (values.commute.length === 0) {
    errors.commute = 'Required'
  }
  if (values.region.length === 0) {
    errors.region = 'Required'
  }
  return errors
}

export default connect(
  state => {
    const suburbs = getSuburbs(state)
    const cities = Array.from(new Set(suburbs.map(suburb => suburb.city)))
    return {
      cities,
      regions: getSelectedRegions(state),
      selectedCity: location(state).city
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
    },
    validate
  })(LocationForm)
)
