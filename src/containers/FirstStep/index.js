import React, {Component} from 'react';
import Input from '../../components/Input';
import styles from './FirstStep.module.css';

class FirstStep extends Component {

  state = {
    email: '',
    name: '',
    error: ''
  };

  onChangeInputHandler = (e) => {
    const {name, value} = e.target;
    if(name === 'email') {
      if(!value.includes('@')) {
        this.setState({
          error: 'в адресе должен быть символ @'
        })
      } else {
        this.setState({
          error: ''
        })
      }
    }
    this.setState({
      [name]: value
    })
  };

  render() {
    const {error} = this.state;
    return (
      <div>
        <p className={styles.label}>1. Введите имя и e-mail</p>
        <Input
          onChange={this.onChangeInputHandler}
          name="name"
          value={this.state.name}
          placeholder="Имя"
          type="text"
        />
        <Input
          onChange={this.onChangeInputHandler}
          name="email"
          value={this.state.email}
          placeholder="e-mail"
          type="email"
          validation={error}
        />
      </div>
    );
  }
}

export default FirstStep;
