import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import history from './history'
import routes from './routes'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale='en'>
      <Router history={history} routes={routes} />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)
