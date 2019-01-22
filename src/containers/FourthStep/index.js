import React, {Component} from 'react';
import ImageList from '../../components/ImageList';
import FormLabel from '../../components/FormLabel';
import styles from './FourthStep.module.css';
import Button from '../../components/Button';
import {KeyboardArrowLeft} from '@material-ui/icons';
import connect from 'react-redux/es/connect/connect';
import {setUserAnimal} from '../../actions/setUser';
import {fetchUser} from '../../actions/fetchUser';

class FourthStep extends Component {

  constructor(props) {
    super(props);

    props.fetchUser();
  }


  state = {
    selectedImageURI: '' || this.props.user.animal,
    isItCat: null,
  };

  onClickImageHandler = (source) => {
    this.setState({
      selectedImageURI: source
    });

    this.compare(source);
  };

  compare = (source) => {
    source.includes('cat') ? this.setState({isItCat: true})
      : this.setState({isItCat: false})
  };

  isValid = () => {
    const {selectedImageURI, isItCat} = this.state;
    return isItCat && selectedImageURI
  };

  submitFormHandler = () => {
    const {selectedImageURI} = this.state;
    const isValid = this.isValid();

    if (isValid) {
      this.props.setUserAnimal(selectedImageURI);
      this.props.handleComplete();
    }
  };

  render() {

    const {
      selectedImageURI,
      isItCat
    } = this.state;

    return (
      <div>
        <FormLabel
          label="4. Выберите любимого котика"
        />
        <ImageList
          selectedImage={selectedImageURI}
          isValid={isItCat}
          onClick={this.onClickImageHandler}
        />
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
            customStyle={customStyle}
          >
            Завершить
          </Button>
        </div>
      </div>
    );
  }
}

const customStyle = {
  backgroundColor: 'orange',
  color: '#fff'
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    setUserAnimal,
    fetchUser
  }
)(FourthStep);
