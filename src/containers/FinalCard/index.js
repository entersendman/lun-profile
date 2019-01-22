import React, {Component} from 'react';
import {fetchUser} from '../../actions/fetchUser';
import {resetUser} from '../../actions/resetUser';
import connect from 'react-redux/es/connect/connect';
import Image from '../../components/Image';
import styles from './FinalCard.module.css';
import Button from '../../components/Button';

class FinalCard extends Component {
  constructor(props) {
    super(props);
    props.fetchUser();
  }

  toUppercaser = (field) =>
    field.charAt(0).toUpperCase() + field.slice(1);

  getObjectKey = (obj) =>
    Object.keys(obj)[0]
      ? this.toUppercaser(Object.keys(obj)[0])
      : null;

  getObjectValue = (obj) =>
    Object.values(obj)[0]
      ? Object.values(obj)[0]
      : null;

  renderSocialList = () => {
    const {user} = this.props;
    return (
      user.social
        .filter(item => Object.values(item)[0].length)
        .map(item =>
          <div
            className={styles.socialContainer}
            key={item}
          >
            <span className={styles.socialLabel}>
              {this.getObjectKey(item)}:
            </span>
            <span className={styles.socialValue}>
              {this.getObjectValue(item)}
            </span>
          </div>
        )
    )
  };

  repeatSteps = () => {
    this.props.resetUser();
    this.props.handleReset();
  };

  render() {

    const {user} = this.props;

    return (
      <div>
        <div className={styles.cardContainer}>
          <div className={styles.userInfo}>
            <div className={
              [styles.listItem, styles.nameField].join(' ')
            }>
              {user.name}
            </div>
            <div className={
              [styles.listItem, styles.emailField].join(' ')
            }>
              {user.email}
            </div>
            <div className={
              [styles.listItem, styles.locationField].join(' ')
            }>
              {user.city}, {user.country}
            </div>
            {this.renderSocialList()}
          </div>
          <div>
            <Image source={user.animal}/>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={this.repeatSteps}
            customStyle={customStyle}
          >
            Пройти заново
          </Button>
        </div>
      </div>
    );
  }
}

const customStyle = {
  backgroundColor: 'orange',
  color: '#fff',
  justifyContent: 'center'
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    fetchUser,
    resetUser
  }
)(FinalCard);
