import * as ActionTypes from '../actionTypes';

export const setUserNameEmail = (name, email) => ({
  type: ActionTypes.SET_USER_NAME_EMAIL,
  payload: {
    name: name,
    email: email
  }
});

export const setUserLocation = (country, city) => ({
  type: ActionTypes.SET_USER_LOCATION,
  payload: {
    country: country,
    city: city
  }
});

export const setUserSocial = social => ({
  type: ActionTypes.SET_USER_SOCIAL,
  payload: {
    social: social
  }
});

export const setUserAnimal = animal => ({
  type: ActionTypes.SET_USER_ANIMAL,
  payload: {
    animal: animal,
  }
});
