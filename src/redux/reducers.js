import { combineReducers } from 'redux';
import {
  HomeReducer,
  InfoReducer,
  UIReducer,
  LikedMovieReducer,
  MoviesSimilarReducer
} from '../modules';

export default combineReducers({
  home: HomeReducer,
  infoModal: InfoReducer,
  likedMovie: LikedMovieReducer,
  moviesSimilar: MoviesSimilarReducer,
  ui: UIReducer
});
