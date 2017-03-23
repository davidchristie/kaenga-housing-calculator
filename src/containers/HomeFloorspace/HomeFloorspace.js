import { connect } from 'react-redux'

import HomeFloorspace from '../../components/HomeFloorspace'
import { getHomeFloorspace } from '../../selectors/floorspace'

export default connect(
  state => {
    const floorspace = getHomeFloorspace(state)
    return {
      ...floorspace,
      visible: true
    }
  }
)(HomeFloorspace)
