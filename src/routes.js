import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import NewUser from './NewUser/NewUser';
import { SnackbarProvider } from 'notistack';

export default function Routes() {
  return (
    <SnackbarProvider maxSnack={2}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/newuser" component={NewUser} />
        </Switch>
      </BrowserRouter>
    </SnackbarProvider>
  );
}
