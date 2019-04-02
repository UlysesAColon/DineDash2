import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import { Button } from '@material-ui/core';


class InputMenu extends Component {
    render() {
      return (
        <div className="App">
        <AppBar />
          <header className="App-header">
            <div>
              <p> Form to have user input </p>
              <Button>Create menu button</Button>

            </div>
          </header>
        </div> 
      );
    }
  }
  
export default InputMenu;