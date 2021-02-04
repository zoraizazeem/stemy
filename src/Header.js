import logo from './logo.png';
import './App.css';
import { Component } from 'react';

export class MyHeader extends Component {
    render(){
      return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name Jeff
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am Learning
        </a>
      </header>
      );
    };
  }