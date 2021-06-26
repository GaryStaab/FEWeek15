//import logo from './logo.svg';
import React from 'react';
import './App.css';
import CarList from './components/car-list';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Car maintenance DB</h1>
        <CarList/>
      </div>
    );
  }
}
