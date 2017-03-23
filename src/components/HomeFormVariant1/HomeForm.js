import React, { Component, PropTypes } from 'react'
import { Button, Panel } from 'react-bootstrap'
import { FieldArray, reduxForm } from 'redux-form'

import BathroomListField from './BathroomListField'
import BedroomListField from './BedroomListField'

class HomeForm extends Component {
  render () {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel bsStyle='warning' header='Home (Variant #1)'>
          <Panel header='Bedrooms'>
            <FieldArray
              component={BedroomListField}
              name='bedrooms'
            />
          </Panel>
          <Panel header='Bathrooms'>
            <FieldArray
              component={BathroomListField}
              name='bathrooms'
            />
          </Panel>
          <Button
            disabled={pristine || submitting}
            onClick={reset}
            >
            Clear
          </Button>
        </Panel>
      </form>
    )
  }
}

HomeForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'homeVariant1'
})(HomeForm)
