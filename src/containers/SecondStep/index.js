import React, {Component} from 'react';
import Select from '../../components/Select';
import countries from '../../mock/countries';
import FormLabel from '../../components/FormLabel';
import cities from '../../mock/cities';
import {
  KeyboardArrowRight,
  KeyboardArrowLeft
} from '@material-ui/icons';
import Button from '../../components/Button';
import styles from './SecondStep.module.css';
import connect from 'react-redux/es/connect/connect';
import {setUserLocation} from '../../actions/setUser';
import {fetchUser} from '../../actions/fetchUser';

class SecondStep extends Component {
  constructor(props) {
    super(props);
    props.fetchUser();
  }

  state = {
    country: '',
    city: '',
    citiesArray: [],
    countriesArray: []
  };

  onChangeSelectHandler = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  };

  selectItemFromList = (name) => (value, id, closeList) => {
    this.setState({
      [name]: value
    });
    if (name === 'country') {
      const filteredcities = this.filterCitiesByCountry(id);
      this.setState({
        citiesArray: filteredcities
      });
    }
    closeList();
  };

  filterCitiesByCountry = (id) => (
    Object.values(cities)
      .filter((city) => city.country === Number(id))
      .map(city => city.name)
  );

  isValid = (country, city) => country && city;

  submitFormHandler = () => {
    const {country, city} = this.state;
    const isValid = this.isValid(country, city);

    if (isValid) {
      this.props.setUserLocation(country, city);
      this.props.handleComplete();
    }
  };

  componentDidMount() {
    const {user} = this.props;
    const countriesArray = Object.values(countries);
    this.setState({
      countriesArray: countriesArray
    });

    if (user.country && user.city) {
      this.setState({
        country: user.country,
        city: user.city
      })
    }
  }

  render() {
    const {
      country,
      city,
      isCountryListVisible,
      isCityListVisible,
      countriesArray,
      citiesArray
    } = this.state;

    return (
      <div>
        <FormLabel
          label="2. Выберите страну и город"
        />
        <Select
          options={countriesArray}
          value={country}
          onChange={this.onChangeSelectHandler}
          name="country"
          placeholder="Страна"
          isListVisible={isCountryListVisible}
          selectItem={this.selectItemFromList('country')}
        />
        <Select
          options={citiesArray}
          value={city}
          onChange={this.onChangeSelectHandler}
          name="city"
          placeholder="Город"
          isListVisible={isCityListVisible}
          selectItem={this.selectItemFromList('city')}
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
  {
    setUserLocation,
    fetchUser
  }
)(SecondStep);
