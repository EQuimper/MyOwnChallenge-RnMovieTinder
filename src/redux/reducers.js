import { combineReducers } from 'redux';
import { HomeReducer } from '../modules';

export default combineReducers({
  home: HomeReducer
});
