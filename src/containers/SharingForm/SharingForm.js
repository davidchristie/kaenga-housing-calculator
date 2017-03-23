import { reduxForm } from 'redux-form'

import SharingForm from '../../components/SharingForm'

export default reduxForm({
  form: 'sharing'
})(SharingForm)
