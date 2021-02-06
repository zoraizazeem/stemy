
import './App.css';
import { Component } from 'react';
import { MyHeader } from './Header';
const Datastore = require('nedb');

const database = new Datastore({ filename: "./database.db", autoload: true });
database.loadDatabase();
database.insert({ name: 'Tester', status: '😇'})


class App extends Component {
  render(){
  return (
    <div className = "App">
      <MyHeader/>
    </div>
  );
;}
}

export default App;
