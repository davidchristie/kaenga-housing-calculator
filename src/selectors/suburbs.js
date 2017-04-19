import location from './location'

const commutes = [
  'Walking distance',
  '10-20',
  '20-40',
  '40-60',
  '60+'
]

export function getCheapestSelectedSuburb (state) {
  const selected = getSelectedSuburbs(state)
  const min = Math.min(...selected.map(suburb => {
    return suburb.landCostPerSqmFloorspace
  }))
  return selected.find(suburb => {
    return suburb.landCostPerSqmFloorspace === min
  })
}

export function getMostExpensiveSelectedSuburb (state) {
  const selected = getSelectedSuburbs(state)
  const max = Math.max(...selected.map(suburb => {
    return suburb.landCostPerSqmFloorspace
  }))
  return selected.find(suburb => {
    return suburb.landCostPerSqmFloorspace === max
  })
}

export function getSelectedSuburbs (state) {
  const values = location(state)
  const selected = getSuburbs(state)
    .filter(suburb => suburb.city === values.city)
    .filter(suburb => values.region.includes(suburb.region))
    .filter(suburb => {
      return values.commute.some(commute => {
        return commutes.indexOf(suburb.commute) <= commutes.indexOf(commute)
      })
    })
  console.log(selected.map(selected => selected.name))
  return selected
}

export function getSuburbs (state) {
  return state.suburbs
}
