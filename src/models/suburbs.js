import { csv } from 'd3-request'

export const readSuburbsData = callback => {
  csv('/data/suburbs.csv', (error, data) => {
    if (error) callback(error)
    const suburbs = data.map(row => {
      return {
        area: row['Area'],
        averageHousePrice: row['Average house price'],
        name: row['Name'],
        referenceSuburb: row['Reference suburb']
      }
    })
    callback(null, suburbs)
  })
}
