import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Main from "./Main/Main";
import Login from "./Login/Login";
import NewUser from "./NewUser/NewUser";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        {/* <Route path="/main" component={Main} /> */}
        <Route path="/newuser" component={NewUser} />
      </Switch>
    </BrowserRouter>
  );
}
