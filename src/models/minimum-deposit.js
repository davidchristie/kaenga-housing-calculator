import { getPriceRange } from '../selectors/report'

export default state => {
  const minTotalCost = getPriceRange(state).min
  return minTotalCost * 0.2
}
