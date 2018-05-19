import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div className="quiz">
        <div className="quiz_title">
          <h1>Benefit Cosmetics Quiz</h1>
        </div>
        <Quiz/>
      </div>
    );
  }
}

export default App;
