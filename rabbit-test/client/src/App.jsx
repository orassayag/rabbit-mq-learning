import React, { Component } from 'react';
import { connectClient } from './client';
import './App.css';

class App extends Component {

  componentDidMount() {
    connectClient();
  }

  render() {
    return (
      <div>
        <button>Click me</button>
      </div>
    );
  }
}

export default App;