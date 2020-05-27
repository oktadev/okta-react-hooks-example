import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import config from "./config";

import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import "./App.css";


const HasAccessToRouter =()=> {

  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  }

  return (
      <Security {...config.oidc} onAuthRequired={customAuthHandler}>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <SecureRoute path="/profile" exact component={Profile} />
        <Route path="/callback" component={LoginCallback} />
      </Security>
  );
}

const App =()=> (
  <Router>
    <HasAccessToRouter/>
  </Router>
)

export default App;
