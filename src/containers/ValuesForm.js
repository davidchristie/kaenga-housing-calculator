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
              label='What balance would you like between private and shared space'
              name='sharedSpace'
              options={[
                'We want as much private space as possible',
                'We am happy to share some space we still want plenty of private living space',
                'We want my home to be for eating and sleeping and I’m happy to have'
              ]}
            />
          </FormGroup>
          <hr />
          <FormGroup>
            <Field
              component={SliderInput}
              label='Would you like to live with others who share your values or in a diverse and vibrant neighbourhood?'
              name='diversity'
              options={[
                'We want to live with others who have the same ethical values as us',
                'We’re happy either way',
                'We want to live in a diverse, vibrant neighbourhood'
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
              label='Shared lifestage or multigenerational'
              name='multigenerational'
              options={[
                'We want to live with others who are in the same lifestage as us',
                'We’re happy either way',
                'We want to live in a multigenerational community'
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
