import * as ActionTypes from '../actionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
  case ActionTypes.SET_USER_NAME_EMAIL:
    return {
      ...state,
      name: payload.name,
      email: payload.email
    };
  case ActionTypes.SET_USER_LOCATION:
    return {
      ...state,
      country: payload.country,
      city: payload.city
    };
  case ActionTypes.SET_USER_SOCIAL:
    return {
      ...state,
      social: payload.social,
    };
  case ActionTypes.SET_USER_ANIMAL:
    return {
      ...state,
      animal: payload.animal
    };

  case ActionTypes.FETCH_USER_DATA:
    return state;

  case ActionTypes.RESET_USER_DATA:
    return initialState;

  default:
    return state
  }
}
