import "./css/App.css";
import { Component } from "react";
import { MyHeader } from "./components/Header";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MyHeader />
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
