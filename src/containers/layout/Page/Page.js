import { connect } from 'react-redux'

import { loadSuburbs } from '../../../actions/suburbs'
import Page from '../../../components/layout/Page'
import { getSelectedSuburbs } from '../../../selectors/suburbs'

export default connect(
  state => {
    return {
      showPrice: getSelectedSuburbs(state).length > 0
    }
  },
  dispatch => {
    return {
      loadSuburbs: () => dispatch(loadSuburbs())
    }
  }
)(Page)
