import React from "react";
import { BrowserRouter, Switch ,Route } from "react-router-dom"; //dependencie
import Home from "../Container/Home";
import Login from "../Container/Login";
import Register from "../Container/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}
