import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
    username: 'Martini Mama'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText=text.join('');
    this.setState({userInput : updatedText});
    }

    render () {
      const charList = this.state.userInput.split('').map((ch, index) => {
        return <Char 
          character={ch} 
          key={index}
          clicked={() => this.deleteCharHandler(index)} />;
      });

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

      <hr/>
      <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length}/>
      {charList}
      </div>
      
    );
  }
}

export default App;
