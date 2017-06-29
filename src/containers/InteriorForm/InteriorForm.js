import React, { Component } from 'react'
import { Col, Panel, Row, Thumbnail } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import StarRating from '../../components/StarRating'
import cosyImage from './Cosy.jpeg'
import flowImage from './Indoor outdoor flow.jpeg'
import homelyImage from './Homely.jpeg'
import industrialImage from './Industrial.jpeg'
import poshImage from './Posh.jpeg'
import quirkyImage from './Quirky.jpg'
import scandiImage from './Scandi.jpeg'

class InteriorForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <h3>
            Interior Design
          </h3>
          <p>
            To help us understand the type of home you’d like to live in, please rate these pictures.
          </p>
          <Row>
            <Col md={6} xs={12}>
              <Thumbnail src={cosyImage}>
                <Field component={StarRating} name='cosy' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={flowImage}>
                <Field component={StarRating} name='flow' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={homelyImage}>
                <Field component={StarRating} name='homely' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={industrialImage}>
                <Field component={StarRating} name='industrial' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={poshImage}>
                <Field component={StarRating} name='posh' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={quirkyImage}>
                <Field component={StarRating} name='quirky' />
              </Thumbnail>
            </Col>
            <Col md={6} xs={12}>
              <Thumbnail src={scandiImage}>
                <Field component={StarRating} name='scandi' />
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
  form: 'interior',
  initialValues: {
    cosy: 0,
    flow: 0,
    homely: 0,
    industrial: 0,
    posh: 0,
    quirky: 0,
    scandi: 0
  },
  validate
})(InteriorForm)
