import React, { Component, PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import { FieldArray, reduxForm } from 'redux-form'

import ItemListControl from '../controls/ItemListControl'
import OccupantFields from './OccupantFields'

class OccupantsForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel bsStyle='warning' header='Occupants (Variant #1)'>
          <FieldArray
            component={ItemListControl}
            defaultItemValues={{age: 'adult'}}
            itemComponent={OccupantFields}
            name='occupants'
          />
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
