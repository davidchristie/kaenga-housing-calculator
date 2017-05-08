import { getPriceRange } from '../selectors/report'
import {
  getCheapestSelectedSuburb,
  getMostExpensiveSelectedSuburb
} from '../selectors/suburbs'

const interestRate = 0.06
const percentage = 20

export default state => {
  const proportion = (100 - percentage) / 100
  const range = getPriceRange(state)
  const loan = {
    max: range.max * proportion,
    min: range.min * proportion
  }
  return {
    max: {
      average: getMostExpensiveSelectedSuburb(state)
        .threeBedroomHousePrice *
        proportion *
        interestRate,
      value: loan.max * interestRate
    },
    min: {
      average: getCheapestSelectedSuburb(state)
        .threeBedroomHousePrice *
        proportion *
        interestRate,
      value: loan.min * interestRate
    }
  }
}
