import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import Welcome from '../pages/Welcome'
import LoginPage from '../pages/LoginPage'
import NewNotePage from '../pages/NewNotePage'


module.exports = (
  <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/newnote" component={WNewNotePageelcome} />
        <IndexRoute component={NewNotePage} />
      </Route>
  </Router>
);
