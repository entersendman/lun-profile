import { combineReducers } from 'redux';
import manageUserReducer from './manageUserReducer';

export default combineReducers({
  user: manageUserReducer,
});
