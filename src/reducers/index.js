import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import showRegistrationForm from './show-registration-form'
import suburbs from './suburbs'

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  showRegistrationForm,
  suburbs
})
