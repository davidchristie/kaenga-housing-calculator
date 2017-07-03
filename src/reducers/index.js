import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import hasRegistered from './has-registered'
import showRegistrationForm from './show-registration-form'
import scroll from './scroll'
import showCalculatedPriceModal from './showCalculatedPriceModal'
import submittedData from './submitted-data'
import suburbs from './suburbs'

export default combineReducers({
  form: formReducer,
  hasRegistered,
  routing: routerReducer,
  showRegistrationForm,
  scroll,
  showCalculatedPriceModal,
  submittedData,
  suburbs
})
