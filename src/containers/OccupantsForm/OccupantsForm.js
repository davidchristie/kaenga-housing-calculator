import { reduxForm } from 'redux-form'

import OccupantsForm from '../../components/OccupantsForm'

export default reduxForm({
  form: 'occupants'
})(OccupantsForm)
