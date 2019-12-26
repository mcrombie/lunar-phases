import React from 'react';
import './App.css';

// const lunarPhases = ["new-moon", "waxing-crescent", "first-quarter", "waxing-gibbous", "full-moon", "waning-gibbous", "last-quarter", "waning-crescent"]


class LunarPhases extends React.Component{
  constructor(props){
    super(props);
    this.state={
      phase: "new-moon"
    }
    this.lunarPhases = [];
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <div className="card" id="title-card" >
          <h1 id="title">Lunar Phases</h1>
        </div>
        <div id="moon-container">
          {/* <div id="date">12/25/2019</div> */}
          <div className="btn" id="back-btn"></div>
          <div className="waning-gibbous" id="moon"></div>
          <div className="btn" id="forward-btn"></div>
        </div>
        <div className="card" id="description-card">
          <h2 id="phase-title">New Moon</h2>
          <p id="description">This is a phase of the moon...blah blah blah</p>
        </div>
        

      </header>
      
    </div>

    )
  }
}

export default LunarPhases;

