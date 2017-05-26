import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Col, ControlLabel, FormGroup, Panel, Row } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import Checkbox from '../components/controls/Checkbox'
import TextInput from '../components/controls/TextInput'
import Anchor from '../components/layout/Anchor'
import Tip from '../components/Tip'

class LifestyleForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <h3>
            Hobbies and Lifestyles{' '}
            <Tip name='lifestyle'>
              We recommend you select up to three but you can choose more or less if you really need to
            </Tip>
          </h3>
          <Anchor id='lifestyle' />
          <FormGroup>
            <ControlLabel>What are your family’s hobbies?</ControlLabel>
            <Row>
              <Col md={6}>
                <Field
                  component={Checkbox}
                  label='Outdoor sports and activities'
                  name='sports'
                />
                <Field
                  component={Checkbox}
                  label='Gardening'
                  name='gardening'
                />
                <Field
                  component={Checkbox}
                  label='Working with tools, building things'
                  name='building'
                />
                <Field
                  component={Checkbox}
                  label='Reading'
                  name='reading'
                />
                <Field
                  component={Checkbox}
                  label='Socialising/meeting new people'
                  name='socialising'
                />
              </Col>
              <Col md={6}>
                <Field
                  component={Checkbox}
                  label='Exercising and keeping fit'
                  name='exercising'
                />
                <Field
                  component={Checkbox}
                  label='Computer games or movies'
                  name='games'
                />
                <Field
                  component={Checkbox}
                  label='Art'
                  name='art'
                />
                <Field
                  component={Checkbox}
                  label='Music'
                  name='music'
                />
              </Col>
            </Row>
            <Field
              component={TextInput}
              name='other'
              placeholder='Other'
              rows={1}
            />
          </FormGroup>
        </Panel>
      </form>
    )
  }
}

LifestyleForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'lifestyle'
})(LifestyleForm)
