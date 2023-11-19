import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import Login from './Login'
import Homepage from './Homepage'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Homepage} />
      </Switch>
    </Router>
  )
}

export default App;
