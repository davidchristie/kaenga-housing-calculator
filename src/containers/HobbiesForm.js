import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ControlLabel, FormGroup, Panel } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import Checkbox from '../components/controls/Checkbox'
import Anchor from '../components/layout/Anchor'
import Tip from '../components/misc/Tip'

class Hobbies extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Hobbies and Lifestyles'>
          <Anchor id='hobbies' />
          <Tip name='hobbies'>
            We recommend you select up to three but you can choose more or less if you really need to
          </Tip>
          <FormGroup>
            <ControlLabel>What are your family’s hobbies?</ControlLabel>
            <Field
              component={Checkbox}
              label='Outdoor sports and activities'
              name='sports'
            />
            <Field
              component={Checkbox}
              label='Exercising and keeping fit'
              name='exercising'
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
          </FormGroup>
        </Panel>
      </form>
    )
  }
}

Hobbies.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  destroyOnUnmount: false,
  form: 'hobbies'
})(Hobbies)
