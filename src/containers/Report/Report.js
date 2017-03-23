import { connect } from 'react-redux'

import Report from '../../components/Report'
import { getTotalBuildCost } from '../../selectors/build-cost'
import { getTotalLandCost } from '../../selectors/land-cost'

export default connect(
  state => {
    const buildCost = getTotalBuildCost(state)
    const landCost = getTotalLandCost(state)
    const total = buildCost + landCost
    return {
      buildCost,
      landCost,
      total
    }
  }
)(Report)
