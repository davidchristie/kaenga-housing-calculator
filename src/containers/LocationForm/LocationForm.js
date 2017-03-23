import { reduxForm } from 'redux-form'

import LocationForm from '../../components/LocationForm'

export default reduxForm({
  form: 'location'
})(LocationForm)
