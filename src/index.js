import React from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { render } from 'react-snapshot'

import history from './history'
import routes from './routes'
import store from './store'

render(
  <Provider store={store}>
    <IntlProvider locale='en'>
      <Router
        history={history}
        onUpdate={() => window.scrollTo(0, 0)}
        routes={routes}
      />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
)
