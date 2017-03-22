import { readSuburbsData } from '../models/suburbs'

export const loadSuburbs = () => {
  return dispatch => {
    readSuburbsData((error, suburbs) => {
      if (error) throw error
      dispatch({
        suburbs,
        type: 'LOAD_SUBURBS'
      })
    })
  }
}
