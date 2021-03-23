import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Recipients from "./Pages/Recipients";
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
  const page = useSelector((state) => state.organizer.page);
  // const showNavbarHome =
  //   history.location.pathname === "/register" ||
  //   history.location.pathname === "/login" ||
  //   history.location.pathname === "/";
  // const showNavbarDashboard = !showNavbarHome;
  // const showNavbarInformation =
  //   history.location.pathname === "/event-information" ||
  //   history.location.pathname === "/update-event";

  useEffect(() => {
    //
  }, [page]);

  console.log(page);

  return (
    <div>
      {/* {showNavbarHome && <NavbarHome />}
      {showNavbarDashboard && <NavbarDashboard />}
      {showNavbarInformation && <NavbarInformation />} */}

      {page === "/register" || page === "/login" || page === "/" ? (
        <NavbarHome />
      ) : (
        <NavbarDashboard />
      )}

      <Switch>
        <Route path="/:eventId/recipients">
          <Recipients />
        </Route>
        <Route path="/event-information/:eventId">
          <NavbarInformation />
          <EventInformation />
        </Route>
        <Route path="/update-event/:eventId">
          <NavbarInformation />
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
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
