import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017'
    }
  }

  changeDeadLine() {
    this.setState({deadline: 'November 25, 2017'})
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <div classNam="Clock-days">14 Days</div>
          <div classNam="Clock-hours">30 hours</div>
          <div classNam="Clock-minutes">15 minutes</div>
          <div classNam="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder='new date' />
          <button onClick={() => this.changeDeadLine()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
