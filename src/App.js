import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import ListBoard from './Components/ListBoard'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <ListBoard />

      </div>
    );
  }
}

export default App;
