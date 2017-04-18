import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
        <Panel>
          <Anchor id='housing-type' />
          <h3>
            Type of Home{' '}
            <Tip name='housing-types'>
              We only build terraced housing and low rise apartments because they offer best value for money
            </Tip>
          </h3>
          <FormGroup>
            <Field component={Select} name='type'>
              <option disabled hidden value=''>Please select...</option>
              <option value='Terraced'>
                Terraced housing (3-10 houses with an outdoor area shared in common)
              </option>
              <option value='Low-rise'>
                Low rise apartment (3 story apartment building with 12-25 units)
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
