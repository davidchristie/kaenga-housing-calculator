import React, { Component, PropTypes } from 'react'
import { Panel, Well } from 'react-bootstrap'
import { FieldArray, reduxForm } from 'redux-form'

import ItemListControl from '../controls/ItemListControl'
import BathroomFields from './BathroomFields'
import BedroomFields from './BedroomFields'

class HomeForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel bsStyle='warning' header='Home (Variant #1)'>
          <Well>
            <h4>Bedrooms</h4>
            <FieldArray
              component={ItemListControl}
              defaultItemValues={{size: 'double'}}
              itemComponent={BedroomFields}
              name='bedrooms'
            />
          </Well>
          <Well>
            <h4>Bathrooms</h4>
            <FieldArray
              component={ItemListControl}
              defaultItemValues={{
                bath: false,
                shower: false,
                toilet: true
              }}
              itemComponent={BathroomFields}
              name='bathrooms'
            />
          </Well>
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
