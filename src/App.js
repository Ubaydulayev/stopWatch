import React from 'react';
import './App.css';
import Stopwatch from './Components/Stopwatch';
import "bootstrap/dist/css/bootstrap.min.css"
import Loading from './Components/Loading';

class App extends React.Component {
  state = {showClock: true};

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
      <div className="text-center mt-4">
        <Loading />
      </div>
    </div>
  }
  
}

export default App;
