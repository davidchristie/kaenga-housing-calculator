import { connect } from 'react-redux'

import { showRegisterForm } from '../../../actions/register'
import Main from '../../../components/pages/Main'

export default connect(
  state => {
    return {
      registerFormOpen: state.registerFormOpen
    }
  },
  dispatch => {
    return {
      showRegisterForm: () => dispatch(showRegisterForm())
    }
  }
)(Main)
