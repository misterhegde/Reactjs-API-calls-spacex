import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import History from "./components/History";

import Payloads from "./components/Payloads";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/history" component={History} />
            <Route path="/payload" component={Payloads} />
          </Switch>
          <Route exact path="/">
            <Redirect to="/history" />
          </Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
