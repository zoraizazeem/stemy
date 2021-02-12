import "./css/App.css";
import { Component } from "react";
import logo from "./logo2_0.png"
import Nav from "./components/Nav";
import About from "./components/About"

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path = "/" exact component = {Home}></Route>
          <Route path="/about" component = {About} />
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>To Keep</p>
  </div>
);

export default App;
