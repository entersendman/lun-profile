import React, {Component} from 'react';
import styles from './App.module.css';
import Stepper from './components/Stepper';
import {Provider} from 'react-redux'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.container}>
          <Stepper/>
        </div>
      </Provider>

    );
  }
}

export default App;
