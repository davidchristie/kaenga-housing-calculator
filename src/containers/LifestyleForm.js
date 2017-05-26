import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Col, ControlLabel, FormGroup, Panel, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Checkbox from '../components/controls/Checkbox'
import TextInput from '../components/controls/TextInput'
import Anchor from '../components/layout/Anchor'
import lifestyle from '../selectors/lifestyle'

class LifestyleForm extends Component {
  render () {
    const { handleSubmit, values } = this.props
    const numberChecked = Object.keys(values)
      .filter(name => values[name])
      .length
    const disableIfUnchecked = numberChecked >= 3
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <h3>
            Hobbies and Lifestyles
          </h3>
          <Anchor id='lifestyle' />
          <FormGroup>
            <ControlLabel>
              What are your family’s hobbies (choose up to three)?
            </ControlLabel>
            <Row>
              <Col md={6}>
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Outdoor sports and activities'
                  name='sports'
                />
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Gardening'
                  name='gardening'
                />
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Working with tools, building things'
                  name='building'
                />
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Reading'
                  name='reading'
                />
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Socialising/meeting new people'
                  name='socialising'
                />
              </Col>
              <Col md={6}>
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Exercising and keeping fit'
                  name='exercising'
                />
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Computer games or movies'
                  name='games'
                />
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Art'
                  name='art'
                />
                <Field
                  component={Checkbox}
                  disableIfUnchecked={disableIfUnchecked}
                  label='Music'
                  name='music'
                />
              </Col>
            </Row>
            <Field
              component={TextInput}
              disableIfUnchecked={disableIfUnchecked}
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

const withForm = reduxForm({
  destroyOnUnmount: false,
  form: 'lifestyle'
})

const withState = connect(
  state => ({values: lifestyle(state)})
)

export default withForm(withState(LifestyleForm))
