import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import LoginPage from '../pages/LoginPage'
import NewNotePage from '../pages/NewNotePage'


module.exports = (
  <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="/login" component={LoginPage} />
        <Route path="/newnote" component={NewNotePage} />
        <IndexRoute component={NewNotePage} />
      </Route>
  </Router>
);
