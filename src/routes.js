import React from 'react'
import { IndexRoute, Route } from 'react-router'

import About from './components/pages/About'
import Main from './containers/pages/Main'
import Report from './components/pages/Report'
import App from './containers/App'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='about' component={About} />
    <Route path='report' component={Report} />
  </Route>
)
