import React, { Component, PropTypes } from 'react'
import { FormGroup, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'

class HousingType extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Housing Type'>
          <FormGroup>
            <Field component={Select} name='type'>
              <option value='house'>
                Standalone house
              </option>
              <option value='terraced'>
                Terraced house (3-10 homes)
              </option>
              <option value='lowRise'>
                Low rise apartments (12-25 homes)
              </option>
              <option value='highRise'>
                High rise apartments (30+ homes)
              </option>
            </Field>
          </FormGroup>
        </Panel>
      </form>
    )
  }
}

HousingType.propTypes = {
  handleSubmit: PropTypes.func
}

export default HousingType
