import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const extensionCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = extensionCompose || compose

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
