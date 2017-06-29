export default function roundCurrency (value) {
  if (value > 1000) {
    return (value.toPrecision(2) / 1000) + 'K'
  } else {
    return value.toPrecision(2)
  }
}
