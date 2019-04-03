import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import MenuFormGrid from '../Grid/MenuFormGrid';
import { MuiThemeProvider , createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
      action:{
          active: '#1d1e22'
      },
      primary: {
        main:'#7c40ff',
  },
      text: '#1d1e22'
}
})
class InputMenu extends Component {
    render() {
      const foodclass = {
        subject :["Appetizer", "Entree", "Dessert"]
      };
      return (
        <MuiThemeProvider theme={theme}>
        <div className="App">
        <AppBar />
          <header className="App-header">
            <div className="menutable">
            <MenuFormGrid foodclass={foodclass} />
            </div>
          </header>
        </div> 
        </MuiThemeProvider>
      );
    }
  }
  
export default InputMenu;