import { csv } from 'd3-request'

export const readSuburbsData = callback => {
  csv('/data/suburbs.csv', (error, data) => {
    if (error) callback(error)
    const suburbs = data.map(row => {
      return {
        area: row['Area'],
        name: row['Name'],
        price: Number(row['Average house price']),
        reference: row['Reference suburb']
      }
    })
    callback(null, suburbs)
  })
}
