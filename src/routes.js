import React from 'react'
import { IndexRoute, Route } from 'react-router'

import About from './components/pages/About'
import Privacy from './components/pages/Privacy'
import Report from './components/pages/Report'
import Page from './containers/layout/Page'
import Main from './containers/pages/Main'

export default (
  <Route path='/' component={Page}>
    <IndexRoute component={Main} />
    <Route path='about' component={About} />
    <Route path='privacy' component={Privacy} />
    <Route path='report' component={Report} />
  </Route>
)
