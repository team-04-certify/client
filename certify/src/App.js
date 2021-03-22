import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useHistory } from "react-router-dom";

import {
  LandingPage,
  Register,
  Login,
  Events,
  CreateEvent,
  UpdateEvent,
  EventInformation,
} from "./Pages";
import { NavbarHome, NavbarDashboard, NavbarInformation } from "./Components";

function App() {
  const history = useHistory();

  const showNavbarHome =
    history.location.pathname === "/register" ||
    history.location.pathname === "/login" ||
    history.location.pathname === "/";
  const showNavbarDashboard = !showNavbarHome;
  const showNavbarInformation =
    history.location.pathname === "/event-information" ||
    history.location.pathname === "/update-event";

  return (
    <div>
      {showNavbarHome && <NavbarHome />}
      {showNavbarDashboard && <NavbarDashboard />}
      {showNavbarInformation && <NavbarInformation />}
      <Switch>
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
