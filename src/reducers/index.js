import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import register from './register'
import suburbs from './suburbs'

export default combineReducers({
  form: formReducer,
  registerFormOpen: register,
  routing: routerReducer,
  suburbs
})
