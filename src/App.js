import React, {Component} from 'react';
import styles from './App.module.css';
import Stepper from './components/Stepper';
import {Provider} from 'react-redux'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stepper/>
      </Provider>

    );
  }
}

export default App;
