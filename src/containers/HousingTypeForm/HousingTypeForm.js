import React, { Component } from 'react'
import { Col, Panel, Row, Thumbnail } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import Anchor from '../../components/layout/Anchor'
import StarRating from '../../components/StarRating'
import highRiseImage from './High rise.jpg'
import largeScaleApartmentImage from './Large scale apartment.jpeg'
import midScaleApartmentImage from './Mid scale apartment.jpg'
import terracedHousingImage from './Terraced housing.jpeg'

class HousingTypeForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <Anchor id='housing-type' />
          <h3>
            Type of Home
          </h3>
          <p>
            Which of these pictures best describes the type of home you would like to live in? Rate them from 1 to 5.
          </p>
          <Row>
            <Col md={6} xs={12}>
              <Thumbnail src={terracedHousingImage}>
                <Field component={StarRating} name='terracedHousing' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={midScaleApartmentImage}>
                <Field component={StarRating} name='midScaleApartment' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={largeScaleApartmentImage}>
                <Field component={StarRating} name='largeScaleApartment' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={highRiseImage}>
                <Field component={StarRating} name='highRise' />
              </Thumbnail>
            </Col>
          </Row>
        </Panel>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  return errors
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'housingType',
  initialValues: {
    highRise: 0,
    largeScaleApartment: 0,
    midScaleApartment: 0,
    terracedHousing: 0
  },
  validate
})(HousingTypeForm)
