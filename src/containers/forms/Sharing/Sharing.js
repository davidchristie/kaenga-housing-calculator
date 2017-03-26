import { reduxForm } from 'redux-form'

import Sharing from '../../../components/forms/Sharing'

export default reduxForm({
  form: 'sharing'
})(Sharing)
