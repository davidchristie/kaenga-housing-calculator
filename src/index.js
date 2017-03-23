import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'

import App from './containers/App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale='en'>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)
