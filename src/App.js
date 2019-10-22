import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Users from "./components/Users";
import Credits from "./components/Credits";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import "./App.scss";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home}></Route>
      <Route path="/users" component={Users}></Route>
      <Route path="/credits" component={Credits}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/sign-up" component={SignUp}></Route>
    </Router>
  );
}

export default App;
