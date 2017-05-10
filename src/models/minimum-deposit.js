import { getPriceRange } from '../selectors/report'

export default state => {
  const minTotalCost = getPriceRange(state).min
  return minTotalCost < 650000
    ? minTotalCost * 0.1
    : minTotalCost * 0.2
}
