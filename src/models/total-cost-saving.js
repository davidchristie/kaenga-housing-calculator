import { getPriceRange } from '../selectors/report'
import { getCheapestSelectedSuburb } from '../selectors/suburbs'

export default state => {
  const kaengaMin = getPriceRange(state).min
  const cheapest = getCheapestSelectedSuburb(state) || {}
  const averageHouse = cheapest.threeBedroomHousePrice || kaengaMin
  const absolute = averageHouse - kaengaMin
  const percentage = (averageHouse - kaengaMin) / averageHouse * 100
  return {
    absolute,
    percentage
  }
}
