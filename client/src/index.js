import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserDashBoard from './components/UserDashboard/UserDashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import InputMenu from './components/InputMenu/InputMenu';



ReactDOM.render(
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
</Router> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
