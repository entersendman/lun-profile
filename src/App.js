import React, {Component} from 'react';
import {container} from './App.module.css';
import FirstStep from './containers/FirstStep';
import SecondStep from './containers/SecondStep';

class App extends Component {
  render() {
    return (
      <div className={container}>
        <FirstStep />
        <SecondStep />
      </div>
    );
  }
}

export default App;
