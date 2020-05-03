import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import App from './pages/Example/App';

const Routes = () => (
  <Switch>
    <Route exact path="/"><Redirect to="/home" /></Route>
    <Route path="/home" render={() => <App />} />
  </Switch>
);

export default Routes;
