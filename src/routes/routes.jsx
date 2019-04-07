import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  Error,
  Login,
  UserHome,
  FormMenu,
  BackFacilite
} from '../layouts';
import { getBasepath } from '../helpers';

const Routes = () => (
  <Router basename={getBasepath()}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/userhome" component={UserHome} />
      <Route exact path="/formmenu" component={FormMenu} />
      <Route exact path="/facilite" component={BackFacilite} />
      <Redirect from="/callback" to="/" />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default Routes;
