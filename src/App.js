import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import config from "./config";

import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import "./App.css";

function customAuthHandler({ history }) {
  history.push("/login");
}

function App() {
  return (
    <Router>
      <Security {...config.oidc} onAuthRequired={customAuthHandler}>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <SecureRoute path="/profile" exact component={Profile} />
        <Route path="/callback" component={ImplicitCallback} />
      </Security>
    </Router>
  );
}

export default App;
