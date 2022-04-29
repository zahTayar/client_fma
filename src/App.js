import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Customer/Dashboard";
import History from "./Customer/History";
import Login from "./Sign/Login";
import Register from "./Sign/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Welcome" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/search" exact component={Dashboard} />
          <Route path="/history" exact component={Dashboard} />
          <Route path="/calculate" exact component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
