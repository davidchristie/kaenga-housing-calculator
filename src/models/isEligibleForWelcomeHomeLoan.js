import { getPriceRange } from '../selectors/report'

const THRESHOLD = 650000

export default function isEligibleForWelcomeHomeLoan (state) {
  return getPriceRange(state).min <= THRESHOLD
}
