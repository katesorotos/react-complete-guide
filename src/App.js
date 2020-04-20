import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Martini Mama'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Understanding the Base Features and Syntax
        </p>
      <UserInput 
      changed={this.usernameChangedHandler}
      currentName={this.state.username} />
      <UserOutput userName={this.state.username} />
      {/* <UserOutput userName={this.state.username} />
      <UserOutput userName='Kate'/> */}
      </div>
    );
  }
}

export default App;
