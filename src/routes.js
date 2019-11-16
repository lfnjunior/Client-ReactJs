import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Login from './Login/Login'
import NewUser from './NewUser/NewUser'
import { SnackbarProvider } from 'notistack'
import PrivateRoute from './Services/privateRoute'
import PublicRoute from './Services/publicRoute'

export default function Routes() {
   return (
      <SnackbarProvider maxSnack={2}>
         <BrowserRouter>
            <Switch>
               <PublicRoute component={Login} restricted={false} path="/" exact />
               <PublicRoute component={NewUser} restricted={true} path="/newuser" exact />
               <PrivateRoute component={Dashboard} path="/dashboard" exact />
            </Switch>
         </BrowserRouter>
      </SnackbarProvider>
   )
}
