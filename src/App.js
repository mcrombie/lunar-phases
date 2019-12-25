import React from 'react';
import logo from './logo.svg';
import './App.css';

class LunarPhases extends React.Component{
  constructor(props){
    super(props);
    this.state={
      phase: "new-moon"
    }
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Set up for the Lunar Phases Project
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    )
  }
}

export default LunarPhases;

