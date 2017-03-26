import { reduxForm } from 'redux-form'

import Home from '../../../components/forms/Home'

export default reduxForm({
  form: 'home'
})(Home)
