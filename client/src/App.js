import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Grid from './components/Grid/Grid';
import Parent from './components/Childtest/Parent';

class App extends Component {
  constructor() {
    super()

  this.state ={
    title: 'placeholder title',
    name: 'Mike',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  }
}

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
  });
  console.log(this.state.name)
  };

  changeTheWorld = (newTitle) => {
    this.setState({title:newTitle});
  }
  // keepTheWorldSame = (newTitle) => {
  //   this.setState({title:newTitle});
  // }
  render() {
    setTimeout(() => {
      this.setState({name: "Bob"});
    }, 10000)
    return (
      <div className="App">
      <AppBar />
        <header className="App-header">
          <div text="text">
            <Grid  handleChangeEvent={this.handleChange.bind(this)}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
