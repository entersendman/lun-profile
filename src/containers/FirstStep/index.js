import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/Input';
import FormLabel from '../../components/FormLabel';
import Button from '../../components/Button';
import {KeyboardArrowRight} from '@material-ui/icons';
import {setUserNameEmail} from '../../actions/setUser';
import {fetchUser} from '../../actions/fetchUser';
import {validateEmail} from '../../utils';
import styles from './FirstStep.module.css';

class FirstStep extends Component {
  constructor(props) {
    super(props);
    props.fetchUser();
  }

  state = {
    email: '',
    name: '',
    error: ''
  };

  onChangeEmailInputHandler = (e) => {
    const {value} = e.target;
    this.setState({
      email: value
    }, () => this.getErrorText(value))
  };

  onChangeNameInputHandler = (e) => {
    const {value} = e.target;
    this.setState({
      name: value
    })
  };

  getErrorText = (email) => {
    const isValid = validateEmail(email);

    if (!email.includes('@')) {
      this.setState({
        error: 'в адресе должен быть символ @'
      })
    } else if (!isValid) {
      this.setState({
        error: 'Введите корректный email'
      })
    } else {
      this.setState({
        error: ''
      })
    }
  };

  submitFormHandler = () => {
    const {name, email, error} = this.state;

    if (!error.length && name && email) {
      this.props.setUserNameEmail(name, email);
      this.props.handleComplete();
    }
  };

  componentDidMount() {
    const {user} = this.props;

    if (user.name && user.email) {
      this.setState({
        name: user.name,
        email: user.email
      })
    }
  }

  render() {
    const {error} = this.state;

    return (
      <div className={styles.firstStepContainer}>
        <FormLabel
          label="1. Введите имя и e-mail"
        />
        <Input
          onChange={this.onChangeNameInputHandler}
          name="name"
          value={this.state.name}
          placeholder="Имя"
          type="text"
        />
        <Input
          onChange={this.onChangeEmailInputHandler}
          name="email"
          value={this.state.email}
          placeholder="e-mail"
          type="email"
          validation={error}
        />
        <Button
          onClick={this.submitFormHandler}
        >
          Следующий
          <KeyboardArrowRight/>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    setUserNameEmail,
    fetchUser
  }
)(FirstStep);
