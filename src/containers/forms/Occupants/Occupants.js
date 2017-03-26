import { reduxForm } from 'redux-form'

import Occupants from '../../../components/forms/Occupants'

export default reduxForm({
  form: 'occupants'
})(Occupants)
