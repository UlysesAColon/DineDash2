import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Grid from './components/Grid/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBar />
        <header className="App-header">
          <div text="text">
            <Grid />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
