import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import MenuFormGrid from '../Grid/MenuFormGrid';


class InputMenu extends Component {
    render() {
      const foodclass = {
        subject :["Appetizer", "Entree", "Dessert"]
      };
      return (
        <div className="App">
        <AppBar />
          <header className="App-header">
            <div>
            <MenuFormGrid foodclass={foodclass} />
            </div>
          </header>
        </div> 
      );
    }
  }
  
export default InputMenu;