import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import LoginPage from '../pages/Welcome'
import LoginPage from '../pages/LoginPage'
import TempView from '../pages/TempView'
import NewNotePage from '../pages/NewNotePage'


module.exports = (
  <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="/tempview" component={TempView} />
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome" component={LoginPage} />
        <IndexRoute component={NewNotePage} />
      </Route>
  </Router>
);
