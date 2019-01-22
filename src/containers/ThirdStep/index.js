import React, {Component} from 'react';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';
import FormLabel from '../../components/FormLabel';
import Button from '../../components/Button';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@material-ui/icons';
import styles from './ThirdStep.module.css';
import connect from 'react-redux/es/connect/connect';
import {setUserSocial} from '../../actions/setUser';

class ThirdStep extends Component {

  state = {
    facebook: false,
    vkontakte: false,
    twitter: false,
    odnoklassniki: false,
    facebookUrl: '',
    twitterUrl: '',
    vkontakteUrl: '',
    odnoklassnikiUrl: ''
  };

  onChangeCheckboxHandler = (name) => (isChecked) => {
    this.setState({
      [name]: !isChecked
    })
  };

  onChangeInputHandler = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  };

  isValid = (fb, vk, tw, od) => fb || vk || tw || od;

  submitFormHandler = () => {
    const {
      facebookUrl,
      twitterUrl,
      vkontakteUrl,
      odnoklassnikiUrl,
    } = this.state;

    const social = [
      {facebook: facebookUrl},
      {twitter: twitterUrl},
      {vkontakte: vkontakteUrl},
      {odnoklassniki: odnoklassnikiUrl}
    ];

    const isValid = this.isValid(
      facebookUrl,
      twitterUrl,
      vkontakteUrl,
      odnoklassnikiUrl
    );

    if (isValid) {
      this.props.setUserSocial(social);
      this.props.handleComplete();
    }
  };

  render() {
    const {
      facebook,
      vkontakte,
      twitter,
      odnoklassniki,
      facebookUrl,
      twitterUrl,
      vkontakteUrl,
      odnoklassnikiUrl
    } = this.state;

    return (
      <div className={styles.container}>
        <FormLabel
          label="3. Отметьте социальные сети"
        />
        <CheckBox
          checked={facebook}
          onChangeHandler={this.onChangeCheckboxHandler('facebook')}
          value="facebook"
          label="Facebook"
        >
          <Input
            placeholder="Ваша страница в facebook"
            name="facebookUrl"
            onChange={this.onChangeInputHandler}
            value={facebookUrl}
          />
        </CheckBox>
        <CheckBox
          checked={vkontakte}
          onChangeHandler={this.onChangeCheckboxHandler('vkontakte')}
          value="vkontakte"
          label="Вконтакте"
        >
          <Input
            placeholder="Ваша страница в vkontakte"
            name="vkontakteUrl"
            onChange={this.onChangeInputHandler}
            value={vkontakteUrl}
          />
        </CheckBox>
        <CheckBox
          checked={twitter}
          onChangeHandler={this.onChangeCheckboxHandler('twitter')}
          value="twitter"
          label="Twitter"
        >
          <Input
            placeholder="Ваша страница в twitter"
            name="twitterUrl"
            onChange={this.onChangeInputHandler}
            value={twitterUrl}
          />
        </CheckBox>
        <CheckBox
          checked={odnoklassniki}
          onChangeHandler={this.onChangeCheckboxHandler('odnoklassniki')}
          value="odnoklassniki"
          label="Одноклассники"
        >
          <Input
            placeholder="Ваша страница в odnoslasskiniki"
            name="odnoklassnikiUrl"
            onChange={this.onChangeInputHandler}
            value={odnoklassnikiUrl}
          />
        </CheckBox>
        <div className={styles.buttonsContainer}>
          <Button
            onClick={this.props.handleBack}
            reverse
          >
            Предыдущий
            <KeyboardArrowLeft/>
          </Button>
          <Button
            onClick={this.submitFormHandler}
          >
            Следующий
            <KeyboardArrowRight/>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {setUserSocial}
)(ThirdStep);
