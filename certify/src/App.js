import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { LandingPage, Register, Login, Events } from './Pages'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/events">
          <Events/>
        </Route>
        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
