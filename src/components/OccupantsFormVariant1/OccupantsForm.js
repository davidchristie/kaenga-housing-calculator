import React, { Component, PropTypes } from 'react'
import { Button, Panel } from 'react-bootstrap'
import { FieldArray, reduxForm } from 'redux-form'

import OccupantListField from './OccupantListField'

class OccupantsForm extends Component {
  render () {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel bsStyle='warning' header='Occupants (Variant #1)'>
          <FieldArray
            component={OccupantListField}
            name='occupants'
          />
          <Button
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Occupants
          </Button>
        </Panel>
      </form>
    )
  }
}

OccupantsForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'occupantsVariant1'
})(OccupantsForm)
