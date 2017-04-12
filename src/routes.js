import React from 'react'
import { IndexRoute, Route } from 'react-router'

import Privacy from './components/pages/Privacy'
import Report from './components/pages/Report'
import Page from './containers/layout/Page'
import MainPage from './containers/MainPage'

export default (
  <Route path='/' component={Page}>
    <IndexRoute component={MainPage} />
    <Route path='privacy' component={Privacy} />
    <Route path='report' component={Report} />
  </Route>
)
