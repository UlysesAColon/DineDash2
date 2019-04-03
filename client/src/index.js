import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserDashBoard from './components/UserDashboard/UserDashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import InputMenu from './components/InputMenu/InputMenu';
import { MuiThemeProvider , createMuiTheme } from '@material-ui/core';
import {red, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: red,
        text: '#1d1e22'
    }
})
console.log(theme);
ReactDOM.render(

    <MuiThemeProvider theme={theme} >
<Router>
    <Route exact ={true}path="/home/" render={() =>(
        <h1> Welcome! </h1>
    )}/>
     <Route exact ={true}path="/userdashboard/" render={() =>(
        <div>
         <UserDashBoard />
        </div>
     )}/>
     <Route exact ={true}path="/usermenu/" render={() =>(
        <div>
         <InputMenu />
        </div>
     )}/>
     
    <Route exact ={true}path="/" component={App}>
    </Route>
</Router> 
</MuiThemeProvider>,
 document.getElementById('root'));
serviceWorker.unregister();
