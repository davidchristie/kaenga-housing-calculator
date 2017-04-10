import { connect } from 'react-redux'

import Features from '../../../components/reports/Features'
import list from './list'

export default connect(
  state => {
    return {
      features: list
        .filter(feature => feature.condition(state))
    }
  }
)(Features)
