import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import App from './pages/Example/App';
import Login from './pages/login';

const Routes = () => (
  <Switch>
    <Route exact path="/"><Redirect to="/home" /></Route>
    <Route path="/home" render={() => <App />} />
    <Route path="/login" render={() => <Login />} />
  </Switch>
);

export default Routes;
