import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";

import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
