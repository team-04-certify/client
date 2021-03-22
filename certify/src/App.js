import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Recipients from './Pages/Recipients'
import {
  LandingPage,
  Register,
  Login,
  Events,
  CreateEvent,
  UpdateEvent,
  EventInformation
} from "./Pages";
import { NavbarHome, NavbarDashboard, NavbarInformation } from "./Components";

function App() {
  return (
    <div>
      <NavbarHome />
      <NavbarDashboard />
      <NavbarInformation />
      <Switch>
        <Route path="/recipients">
          <Recipients />
        </Route>
        <Route path="/event-information">
          <EventInformation />
        </Route>
        <Route path="/update-event">
          <UpdateEvent />
        </Route>
        <Route path="/create-event">
          <CreateEvent />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
