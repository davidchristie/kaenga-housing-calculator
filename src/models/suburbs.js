import { csv } from 'd3-request'

import data from './data/suburbs.csv'

function parseSuburbRow (row) {
  return {
    city: row['City'],
    commute: row['Commute to city'],
    costPerSqmKaenga: Number(row['cost per net sqm floor area_kaenga']),
    grossBuildCostPerSqm: Number(row['Gross Build cost per sqm']),
    name: row['Suburb'],
    threeBedroomHousePrice: Number(row['3bdr hse']),
    region: row['Region']
  }
}

export function readSuburbsData (callback) {
  csv(data, (error, rows) => {
    if (error) callback(error)
    const suburbs = rows.map(parseSuburbRow)
    callback(null, suburbs)
  })
}
