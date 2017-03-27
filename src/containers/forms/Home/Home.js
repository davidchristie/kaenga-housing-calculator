import { reduxForm } from 'redux-form'

import Home from '../../../components/forms/Home'

export default reduxForm({
  destroyOnUnmount: false,
  form: 'home'
})(Home)
