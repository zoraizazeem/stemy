import logo from "../logo.png";
import "../css/App.css";
import { Component } from "react";

export class MyHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name Jeff</p>

      </header>
    );
  }
}
