import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const Routes = () => {
  const logado = localStorage.getItem('@user');

  return (
    <Router>
      <Switch>
        {!logado && <Route path="/" exact component={Login} />}
        {logado && <Route path="/" component={Home} />}
      </Switch>
    </Router>
  );
};

export default Routes;
