import React, { Component, PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import { Field } from 'redux-form'

import BathtubsField from './BathtubsField'
import DoubleBedroomsField from './DoubleBedroomsField'
import SingleBedroomsField from './SingleBedroomsField'
import ShowersField from './ShowersField'
import StudyField from './StudyField'
import ToiletsField from './ToiletsField'

class HomeForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Panel header='Home'>
          <Field component={DoubleBedroomsField} name='doubleBedrooms' />
          <Field component={SingleBedroomsField} name='singleBedrooms' />
          <Field component={StudyField} name='study' />
          <Field component={BathtubsField} name='bathtubs' />
          <Field component={ShowersField} name='showers' />
          <Field component={ToiletsField} name='toilets' />
        </Panel>
      </form>
    )
  }
}

HomeForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default HomeForm
