import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import UserDashboardGrid from '../Grid/UserDashboardGrid';


class UserDashboard extends Component {
  render() {
    return (
      <div className="App">
      <AppBar />
        <header className="App-header">
          <div>
            <UserDashboardGrid />
          </div>
        </header>
      </div>
    );
  }
}

export default UserDashboard;
