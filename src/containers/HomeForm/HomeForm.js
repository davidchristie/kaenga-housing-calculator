import { reduxForm } from 'redux-form'

import HomeForm from '../../components/HomeForm'

export default reduxForm({
  form: 'home'
})(HomeForm)
