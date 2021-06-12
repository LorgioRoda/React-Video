import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //dependencie
import Home from "../Container/Home";
import Login from "../Container/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
      </BrowserRouter>
    </>
  );
}
