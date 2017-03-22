import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import suburbs from './suburbs'

export default combineReducers({
  form: formReducer,
  suburbs
})
