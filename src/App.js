import React from 'react';
import './App.css';
import Stopwatch from './Components/Stopwatch';
import "bootstrap/dist/css/bootstrap.min.css"
import Loading from './Components/Loading';
import ClockWithHook from './Components/ClockWithHook';

class App extends React.Component {
  state = {showClock: false};

  toggleClock = ()=>{
    this.setState((state) => {
      return {showClock : !state.showClock }
    })
  }

  render (){
    return <div className="App">
      <button className="btn btn-dark" onClick={this.toggleClock}>
        {this.state.showClock && "Hide" || "Show"}
      </button>
      {this.state.showClock && <Stopwatch />}
        <div className="mt-4">{this.state.showClock && <ClockWithHook />}</div>
      <div className="text-center mt-4">
        {this.state.showClock && <Loading />}
      </div>
    </div>
  }
  
}

export default App;
