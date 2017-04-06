import React, { Component, PropTypes } from 'react'
import { FormGroup, Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import Select from '../../controls/Select'
import Anchor from '../../layout/Anchor'
import Tip from '../../misc/Tip'

class HousingType extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Housing Type'>
          <Anchor id='housing-type' />
          <Tip name='housing-types'>
            In most locations, terraced housing and low rise apartments offer the best value for money
          </Tip>
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
