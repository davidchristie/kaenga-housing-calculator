import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import AdultsField from './AdultsField'
import BathtubsField from './BathtubsField'
import ChildrenField from './ChildrenField'
import DoubleBedroomsField from './DoubleBedroomsField'
import SingleBedroomsField from './SingleBedroomsField'
import ShowersField from './ShowersField'
import StudyField from './StudyField'
import TeenagersField from './TeenagersField'
import ToiletsField from './ToiletsField'

class HomeForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field component={AdultsField} name='adults' />
        <Field component={TeenagersField} name='teenagers' />
        <Field component={ChildrenField} name='children' />
        <Field component={DoubleBedroomsField} name='doubleBedrooms' />
        <Field component={SingleBedroomsField} name='singleBedrooms' />
        <Field component={StudyField} name='study' />
        <Field component={BathtubsField} name='bathtubs' />
        <Field component={ShowersField} name='showers' />
        <Field component={ToiletsField} name='toilets' />
      </form>
    )
  }
}

HomeForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'home'
})(HomeForm)
