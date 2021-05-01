import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import User from './component/User'
import Header from './component/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import LoginUser from './component/Login';
import Task from './component/Task'
import info_1 from './component/Info_one'
import info_2 from './component/Info_two'
import info_3 from './component/Info_three'
import Reset from './component/Reset'

export default function App() {
  const Authuser = {
    email: "user_01",
    password: "user_01"
  };

  const [user, setUser] = useState({ email: "", password: "" });

  const Login = (userdata) => {
    if (
      userdata.email == Authuser.email &&
      userdata.password == Authuser.password
    ) {
      setUser({
        email: userdata.email,
        password: userdata.password
      });
    }
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div>
          <Router>
            <Header></Header>
            <switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/task">
                <Task></Task>
              </Route>
              <Route path="/user">
                <User></User>
              </Route>
              <Route path="/reset">
                <Reset></Reset>
              </Route>
            </switch>
          </Router>
        </div>
      ) : (
        <div>
          <LoginUser User={Login}></LoginUser>
        </div>
      )}
    </div>
  );
}



