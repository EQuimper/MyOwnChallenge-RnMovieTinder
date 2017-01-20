import { combineReducers } from 'redux';
import { HomeReducer, InfoReducer, UIReducer, LikedMovieReducer } from '../modules';

export default combineReducers({
  home: HomeReducer,
  infoModal: InfoReducer,
  likedMovie: LikedMovieReducer,
  ui: UIReducer
});
