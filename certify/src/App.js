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
  Template,
  Validation,
} from "./Pages";
import {
  NavbarHome,
  NavbarDashboard,
  NavbarInformation,
  ValidateCard,
} from "./Components";

function App() {
  const history = useHistory();
  const page = useSelector((state) => state.organizer.page);

  useEffect(() => {
    //
  }, [page]);

  console.log(page);

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
          <NavbarHome />
          <Validation />
        </Route>
        <Route path="/create-event">
          <NavbarDashboard />
          <CreateEvent />
        </Route>
        <Route path="/register">
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
