import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Col, ControlLabel, FormGroup, Panel, Row } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import Checkbox from '../components/controls/Checkbox'
import TextInput from '../components/controls/TextInput'
import Anchor from '../components/layout/Anchor'
import Tip from '../components/misc/Tip'

class HobbiesForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <h3>
            Hobbies and Lifestyles{' '}
            <Tip name='hobbies'>
              We recommend you select up to three but you can choose more or less if you really need to
            </Tip>
          </h3>
          <Anchor id='hobbies' />
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
              </Col>
              <Col md={6}>
                <Field
                  component={Checkbox}
                  label='Exercising and keeping fit'
                  name='exercising'
                />
                <Field
                  component={Checkbox}
                  label='Playing board/computer games'
                  name='games'
                />
                <Field
                  component={Checkbox}
                  label='Art/music'
                  name='artMusic'
                />
                <Field
                  component={Checkbox}
                  label='Socialising/meeting new people'
                  name='socialising'
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

HobbiesForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'hobbies'
})(HobbiesForm)
