import { connect } from 'react-redux'

import {
  hideRegisterForm,
  showRegisterForm
} from '../../../actions/register'
import Main from '../../../components/pages/Main'

export default connect(
  state => {
    return {
      registerFormOpen: state.registerFormOpen
    }
  },
  dispatch => {
    return {
      hideRegisterForm: () => dispatch(hideRegisterForm()),
      showRegisterForm: () => dispatch(showRegisterForm())
    }
  }
)(Main)
