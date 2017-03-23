import { connect } from 'react-redux'

import Report from '../../components/Report'
import { getTotalBuildCost } from '../../selectors/build-cost'

export default connect(
  state => {
    const buildCost = getTotalBuildCost(state)
    const total = buildCost
    return {
      buildCost,
      total
    }
  }
)(Report)
