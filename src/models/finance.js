const primeInterestRate = 0.065
const mezInterest = 0.2

export function getAverageInterest () {
  return primeInterestRate * 0.8 + mezInterest * 0.2 + 1
}
