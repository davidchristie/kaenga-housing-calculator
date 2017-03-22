import { connect } from 'react-redux'

import { loadSuburbs } from '../../actions/suburbs'
import App from '../../components/App'
import { getSuburbs } from '../../selectors/suburbs'

export default connect(
  state => {
    return {
      suburbs: getSuburbs(state)
    }
  },
  dispatch => {
    return {
      loadSuburbs: () => dispatch(loadSuburbs())
    }
  }
)(App)
