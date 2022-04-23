import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Customer/Dashboard";
import PersonalInfo from "./Customer/PersonalInfo";
import History from "./Customer/History";
import Login from "./Sign/Login";
import Register from "./Sign/Register";
import TableMap from "./Manager/TableMap";
import Hostess from "./Hostess/HostessDash";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Welcome" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/search" exact component={Dashboard} />
          <Route path="/dashboard/PersonalInfo" component={PersonalInfo} />
          <Route path="/history" component={History} />
          <Route path="/tableMap" component={TableMap} />
          <Route path="/hostess" component={Hostess} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
