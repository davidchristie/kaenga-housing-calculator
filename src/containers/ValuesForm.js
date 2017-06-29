import React, { Component } from 'react'
import { FormGroup, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Select from '../components/controls/Select'
import TextArea from '../components/controls/TextArea'
import Anchor from '../components/layout/Anchor'
import SliderInput from '../components/SliderInput'
import values from '../selectors/values'

class ValuesForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel>
          <Anchor id='values' />
          <h3>
            Values
          </h3>
          <FormGroup>
            <Field
              component={SliderInput}
              label='How open are you to sharing space and facilities with your neighbours?'
              name='sharedSpace'
              options={[
                'I’m willing to pay more to have my own private space and facilities',
                'I’m willing to share some space and facilities to save money but I still want plenty of private space',
                'I’m happy to exchange a lot of private space for communal space to save money'
              ]}
            />
          </FormGroup>
          <hr />
          <FormGroup>
            <Field
              component={SliderInput}
              label='Do you want to live in a community where people share the same values or one that welcomes people with different values?'
              name='diversity'
              options={[
                'I want to live with others who have the same ethical values',
                'I don’t mind',
                'I want to live with people who welcome others with different values'
              ]}
            />
          </FormGroup>
          {
            this.props.values.diversity === '1'
              ? (
                <Field
                  component={TextArea}
                  label='What are your three most important values'
                  name='mostImportantValues'
                  rows={4}
                  style={{resize: 'none'}}
                />
              )
              : null
          }
          <hr />
          <FormGroup>
            <Field
              component={SliderInput}
              label='Do you want to live with others who are at the same life stage as you or in a with others who are at different life stages?'
              name='multigenerational'
              options={[
                'I want to live with others at the same life stage',
                'I don’t mind',
                'I want to live with people at a range of different life stages'
              ]}
            />
          </FormGroup>
          {
            this.props.values.multigenerational === '1'
              ? (
                <Field
                  component={Select}
                  label='What life stage are you in'
                  name='lifestage'
                >
                  <option disabled hidden value=''>Please select...</option>
                  <option value='Young single'>
                    Young single
                  </option>
                  <option value='Young couple/newly weds'>
                    Young couple/newly weds
                  </option>
                  <option value='Young family (babies and kids)'>
                    Young family (babies and kids)
                  </option>
                  <option value='Older family (teenagers and adult children)'>
                    Older family (teenagers and adult children)
                  </option>
                  <option value='Empty nesters'>
                    Empty nesters
                  </option>
                  <option value='Retirees'>
                    Retirees
                  </option>
                  <option value='Prefer not to answer'>
                    Prefer not to answer
                  </option>
                </Field>
              )
              : null
          }
          <hr />
          <FormGroup>
            <Field
              component={SliderInput}
              label='Do you prefer to spend your time indoors or outdoors'
              name='outdoors'
              options={[
                'We prefer to spend our time on the deck or in the garden',
                'We like to do both',
                'We prefer to stay indoors most of the time'
              ]}
            />
          </FormGroup>
          <hr />
          <FormGroup>
            <Field
              component={SliderInput}
              label='How much of the time will you be at home'
              name='timeAtHome'
              options={[
                'Most of the time',
                'Some of the time',
                'Only at night and on weekends'
              ]}
            />
          </FormGroup>
        </Panel>
      </form>
    )
  }
}

const withState = connect(
  state => ({values: values(state)})
)

const validate = values => {
  const errors = {}
  if (values.multigenerational === '1' && !values.lifestage) {
    errors.lifestage = 'Required'
  }
  return errors
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'values',
  initialValues: {
    diversity: 2,
    multigenerational: 2,
    outdoors: 2,
    sharedSpace: 2,
    timeAtHome: 2
  },
  validate
})(withState(ValuesForm))
