import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  );
}
