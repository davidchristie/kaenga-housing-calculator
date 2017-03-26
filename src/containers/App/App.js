import { connect } from 'react-redux'

import { loadSuburbs } from '../../actions/suburbs'
import App from '../../components/App'

export default connect(
  null,
  dispatch => {
    return {
      loadSuburbs: () => dispatch(loadSuburbs())
    }
  }
)(App)
