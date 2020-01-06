import React from 'react';
import './App.css';

// const lunarPhases = ["new-moon", "waxing-crescent", "first-quarter", "waxing-gibbous", "full-moon", "waning-gibbous", "last-quarter", "waning-crescent"]


//create linked list structure
const NEWMOONDESCRIPTION = "In this first phase, the moon is between the sun and the earth. It appears completely dark because the unlit side is facing the earth. This is the only time a solar eclipse can occur.";
const WAXINGCRESCENTDESCRIPTION = "After a few days, the moon has moved along some in its orbit and we can begin to see a sliver of the day side. The light will grow thicker each night until it reaches the next phase.";
const FIRSTQUARTERDESCRIPTION = "Sometimes called the half moon because half the moon appears lit, we call it first quarter because the moon is one quarter of the way through its cycle and is continuing to grow.";
const WAXINGGIBBOUSDESCRIPTION = "Gibbous means \"humped\" or \"swollen\". It grows thicker each night until it reaches the next phase.";
const FULLMOONDESCRIPTION = "At this biggest and brightest of phases, the moon appears completely illuminated. The moon rises at sunset and is up all night. It is halfway through its orbit around the earth. This is the only time a lunar eclipse can happen.";
const WANINGGIBBOUSDESCRIPTION = "Gibbous means \"humped\" or \"swollen\". It grows thinner each night until it reaches the next phase.";
const LASTQUARTERDESCRIPTION = "Also called the third quarter, the moon is three quarters of the way through its orbit.";
const WANINGCRESCENTDESCRIPTION = "The moon is nearing the end of its orbit. It will continue shrinking until it returns to new moon and the cycle will begin again.";

class LunarPhases extends React.Component{
  constructor(props){
    super(props);
    this.state={
      phase: "new-moon",
      description: NEWMOONDESCRIPTION
    }
    // this.lunarPhases = [];
    this.backwardButton = this.backwardButton.bind(this);
    this.forwardButton = this.forwardButton.bind(this);
  }
  backwardButton (){
    switch(this.state.phase){
      case "new-moon":
        this.setState({phase:"waning-crescent", description:WANINGCRESCENTDESCRIPTION})
        break;
      case "waning-crescent":
        this.setState({phase:"last-quarter", description:LASTQUARTERDESCRIPTION})
        break;
      case "last-quarter":
        this.setState({phase:"waning-gibbous", description:WANINGGIBBOUSDESCRIPTION})
        break;
      case "waning-gibbous":
        this.setState({phase:"full-moon", description:FULLMOONDESCRIPTION})
        break;
      case "full-moon":
        this.setState({phase:"waxing-gibbous", description:WAXINGGIBBOUSDESCRIPTION})
        break;
      case "waxing-gibbous":
        this.setState({phase:"first-quarter", description:FIRSTQUARTERDESCRIPTION})
        break;
      case "first-quarter":
        this.setState({phase:"waxing-crescent", description:WAXINGCRESCENTDESCRIPTION})
        break;
      case "waxing-crescent":
        this.setState({phase:"new-moon", description:NEWMOONDESCRIPTION})
        break;
    }
  }
  forwardButton (){
    switch(this.state.phase){
      case "new-moon":
        this.setState({phase:"waxing-crescent", description:WAXINGCRESCENTDESCRIPTION})
        break;
      case "waxing-crescent":
        this.setState({phase:"first-quarter", description:FIRSTQUARTERDESCRIPTION})
        break;
      case "first-quarter":
        this.setState({phase:"waxing-gibbous", description:WAXINGGIBBOUSDESCRIPTION})
        break;
      case "waxing-gibbous":
        this.setState({phase:"full-moon", description:FULLMOONDESCRIPTION})
        break;
      case "full-moon":
        this.setState({phase:"waning-gibbous", description:WANINGGIBBOUSDESCRIPTION})
        break;
      case "waning-gibbous":
        this.setState({phase:"last-quarter", description:LASTQUARTERDESCRIPTION})
        break;
      case "last-quarter":
        this.setState({phase:"waning-crescent", description:WANINGCRESCENTDESCRIPTION})
        break;
      case "waning-crescent":
        this.setState({phase:"new-moon", description:NEWMOONDESCRIPTION})
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
          <h2 id="phase-title">{this.state.phase}</h2>
          <p id="description">{this.state.description}</p>
        </div>
        

      </header>
      
    </div>

    )
  }
}

export default LunarPhases;

