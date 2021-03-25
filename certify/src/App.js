import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
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
  Template,
  Validation,
} from "./Pages";
import {
  NavbarHome,
  NavbarDashboard,
  NavbarInformation,
  NavbarValidate,
} from "./Components";

function App() {
  const page = useSelector((state) => state.organizer.page);

  useEffect(() => {
    //
  }, [page]);

  return (
    <div>
      {/* {showNavbarHome && <NavbarHome />}
      {showNavbarDashboard && <NavbarDashboard />}
      {showNavbarInformation && <NavbarInformation />} */}

      {/* {page === "/register" || page === "/login" || page === "/" ? (
        <NavbarHome />
      ) : (
        page !== ""(<NavbarDashboard />)
      )} */}

      <Switch>
        <Route path="/upload-template/:eventId">
          <NavbarDashboard />
          <NavbarInformation />
          <Template />
        </Route>
        <Route path="/:eventId/recipients">
          <NavbarDashboard />
          <NavbarInformation />
          <Recipients />
        </Route>
        <Route path="/event-information/:eventId">
          <NavbarDashboard />
          <NavbarInformation />
          <EventInformation />
        </Route>
        <Route path="/update-event/:eventId">
          <NavbarDashboard />
          <NavbarInformation />
          <UpdateEvent />
        </Route>
        <Route path="/certificate/:recipientId">
          <NavbarValidate />
          <Validation />
        </Route>
        <Route path="/create-event">
          <NavbarDashboard />
          <CreateEvent />
        </Route>
        <Route path="/register">
          <NavbarHome />
          <Register />
        </Route>
        <Route path="/login">
          <NavbarHome />
          <Login />
        </Route>
        <Route path="/events">
          <NavbarDashboard />
          <Events />
        </Route>
        <Route exact path="/">
          <NavbarHome />
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
