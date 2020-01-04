import React from 'react';
import './App.css';

// const lunarPhases = ["new-moon", "waxing-crescent", "first-quarter", "waxing-gibbous", "full-moon", "waning-gibbous", "last-quarter", "waning-crescent"]


//create linked list structure

class LunarPhases extends React.Component{
  constructor(props){
    super(props);
    this.state={
      phase: "new-moon"
    }
    // this.lunarPhases = [];
    this.backwardButton = this.backwardButton.bind(this);
    this.forwardButton = this.forwardButton.bind(this);
  }
  backwardButton (){
    switch(this.state.phase){
      case "new-moon":
        this.setState({phase:"waning-crescent"})
        break;
      case "waning-crescent":
        this.setState({phase:"last-quarter"})
        break;
      case "last-quarter":
        this.setState({phase:"waning-gibbous"})
        break;
      case "waning-gibbous":
        this.setState({phase:"full-moon"})
        break;
      case "full-moon":
        this.setState({phase:"waxing-gibbous"})
        break;
      case "waxing-gibbous":
        this.setState({phase:"first-quarter"})
        break;
      case "first-quarter":
        this.setState({phase:"waxing-crescent"})
        break;
      case "waxing-crescent":
        this.setState({phase:"new-moon"})
        break;
    }
  }
  forwardButton (){
    switch(this.state.phase){
      case "new-moon":
        this.setState({phase:"waxing-crescent"})
        break;
      case "waxing-crescent":
        this.setState({phase:"first-quarter"})
        break;
      case "first-quarter":
        this.setState({phase:"waxing-gibbous"})
        break;
      case "waxing-gibbous":
        this.setState({phase:"full-moon"})
        break;
      case "full-moon":
        this.setState({phase:"waning-gibbous"})
        break;
      case "waning-gibbous":
        this.setState({phase:"last-quarter"})
        break;
      case "last-quarter":
        this.setState({phase:"waning-crescent"})
        break;
      case "waning-crescent":
        this.setState({phase:"new-moon"})
        break;
    }
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
          <div className="btn" id="back-btn" onClick={this.backwardButton}></div>
          <div className={this.state.phase} id="moon"></div>
          <div className="btn" id="forward-btn" onClick={this.forwardButton}></div>
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

