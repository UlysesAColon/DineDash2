import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Grid from './components/Grid/Grid';
import Child from './components/Childtest/Child';
import Parent from './components/Childtest/Parent';

class App extends Component {
  constructor() {
    super()

  this.state ={
    title: 'placeholder title',
    name: 'Please enter a username',
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
    }, 1000)
    return (
      <div className="App">
      <AppBar />
        <header className="App-header">
          <div text="text">
          {this.state.name}
          <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')} 
                  keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}
          title={this.state.title}/>
            <Grid  handleChangeEvent={this.handleChange.bind(this)}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
