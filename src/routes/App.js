import React from "react";
import { BrowserRouter, Switch ,Route } from "react-router-dom"; //dependencies
import Home from "../Container/Home";
import Login from "../Container/Login";
import NotFound from "../Container/NotFound";
import Register from "../Container/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}
