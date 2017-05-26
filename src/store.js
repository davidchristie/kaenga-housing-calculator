import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const extensionCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = extensionCompose || compose

let storedStateJson = null
try {
  storedStateJson = window.localStorage.getItem('state')
} catch (error) {
  console.log(error.message)
  window.localStorage.clear()
}

const preloadedState = storedStateJson
  ? JSON.parse(storedStateJson)
  : {}

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  window.localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store
