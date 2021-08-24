import {useState} from "react";
import Dashboard from "./pages/Dashboard/";
import Preferences from "./pages/Preferences/";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from "./components/Hooks/useToken"
import Login from "./components/Login"


import "./App.css";
function App() {
  const { token, setToken } = useToken();

   if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
