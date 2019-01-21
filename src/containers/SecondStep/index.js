import React, {Component} from 'react';
import Select from '../../components/Select';
import countries from '../../mock/countries';
import cities from '../../mock/cities';
import styles from '../FirstStep/FirstStep.module.css';

class SecondStep extends Component {

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
    if(name === 'country') {
      console.log(id);
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

  toggleSelectCountryList = () => {
    const {isCountryListVisible} = this.state;
    this.setState({
      isCountryListVisible: !isCountryListVisible
    })
  };

  componentDidMount() {
    const countriesArray = Object.values(countries);
    this.setState({
      countriesArray: countriesArray
    })
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
        <p className={styles.label}>2. Выберите страну и город.</p>
        <Select
          options={countriesArray}
          value={country}
          onChange={this.onChangeSelectHandler}
          name="country"
          placeholder="Страна"
          isListVisible={isCountryListVisible}
          selectItem={this.selectItemFromList('country')}
          toggleList={this.toggleSelectCountryList}
        />
        <Select
          options={citiesArray}
          value={city}
          onChange={this.onChangeSelectHandler}
          name="city"
          placeholder="Город"
          isListVisible={isCityListVisible}
          selectItem={this.selectItemFromList('city')}
          toggleList={this.toggleSelectCityList}
        />
      </div>
    );
  }
}

export default SecondStep;
