import transport from '../selectors/transport'

const costOfCar = 11029

export default state => {
  let value = 0
  const { commute, needCar } = transport(state)
  switch (commute) {
    case 'publicTransport':
      value += 1420
      break
    case 'carPool':
      value += costOfCar / 3
      break
    case 'car':
      value += costOfCar
      break
  }
  if (commute !== 'car') {
    switch (needCar) {
      case 'mostDays':
        value += 4680
        break
      case 'onceOrTwice':
        value += 1560
        break
      case 'lessThanOnce':
        value += 390
        break
    }
  }
  return {
    saving: {
      absolute: costOfCar - value,
      percentage: (costOfCar - value) / costOfCar * 100
    },
    value
  }
}
