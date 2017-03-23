import { csv } from 'd3-request'

const coverage = 0.5
const grossToNet = 0.9
const floors = 3
const referenceBaseCost = {
  'Grey Lynn': 3000,
  'New Lynn': 1200
}

function parseSuburbRow (row) {
  return {
    area: row['Area'],
    name: row['Name'],
    price: Number(row['Average house price']),
    reference: row['Reference suburb']
  }
}

function withLandCostPerSqmFloorspace (suburbs) {
  const nameToPrice = {}
  suburbs.forEach(suburb => {
    nameToPrice[suburb.name] = suburb.price
  })
  return suburbs.map(suburb => {
    const referencePrice = nameToPrice[suburb.reference]
    const baseCost = referenceBaseCost[suburb.reference]
    const landCostPerSqmFloorspace = suburb.price /
      referencePrice *
      baseCost /
      coverage /
      floors /
      grossToNet
    return {
      ...suburb,
      landCostPerSqmFloorspace
    }
  })
}

export function readSuburbsData (callback) {
  csv('/data/suburbs.csv', (error, data) => {
    if (error) callback(error)
    const suburbs = data.map(parseSuburbRow)
    callback(null, withLandCostPerSqmFloorspace(suburbs))
  })
}
