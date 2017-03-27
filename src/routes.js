import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Main from './components/pages/Main'
import Report from './components/pages/Report'
import App from './containers/App'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='report' component={Report} />
  </Route>
)
