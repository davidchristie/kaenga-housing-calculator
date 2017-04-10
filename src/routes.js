import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Privacy from './components/pages/Privacy'
import Report from './components/pages/Report'
import Page from './containers/layout/Page'
import Main from './containers/pages/Main'

export default (
  <Route path='/' component={Page}>
    <IndexRoute component={Main} />
    <Route path='privacy' component={Privacy} />
    <Route path='report' component={Report} />
  </Route>
)
