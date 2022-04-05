import "./Hostess/App.css";
import React from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Dashboard from "./Customer/CustomerDash";
import PersonalInfo from "./Customer/PersonalInfo";
import Reservations from "./Customer/Reservations";
import Login from "./Sign/Login";
import Register from "./Sign/Register";
import TableMap from "./Manager/TableMap";
import Hostess from "./Hostess/HostessDash";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/"  element={<Login/>} />
          <Route path="/Welcome" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/dashboard/PersonalInfo" element={<PersonalInfo/>} />
          <Route path="/dashboard/Reservations" element={<Reservations/>} />
          <Route path="/tableMap" element={<TableMap/>} />
          <Route path="/hostess" element ={<Hostess/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
