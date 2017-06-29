import React, { Component } from 'react'
import { Col, Panel, Row, Thumbnail } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import StarRating from '../../components/StarRating'
import angularImage from './Angular.jpeg'
import greenImage from './Green.jpg'
import postModernImage from './Post modern.jpeg'
import slickImage from './Slick.jpeg'
import socialImage from './Social.jpg'

class ExteriorForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <h3>
            Exterior Appearance
          </h3>
          <p>
            To help us understand the type of home you’d like to live in, please rate these pictures.
          </p>
          <Row>
            <Col md={6} xs={12}>
              <Thumbnail src={angularImage}>
                <Field component={StarRating} name='angular' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={greenImage}>
                <Field component={StarRating} name='green' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={postModernImage}>
                <Field component={StarRating} name='postModern' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={slickImage}>
                <Field component={StarRating} name='slick' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={socialImage}>
                <Field component={StarRating} name='social' />
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
  form: 'exterior',
  initialValues: {
    angular: 0,
    green: 0,
    postModern: 0,
    slick: 0,
    social: 0
  },
  validate
})(ExteriorForm)
