import { GET_MOVIE_TRAILER } from './actions';

const INITIAL_STATE = {
  isFetched: false,
  error: null,
  videos: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_MOVIE_TRAILER}_PENDING`:
      return INITIAL_STATE;
    case `${GET_MOVIE_TRAILER}_FULFILLED`:
      return { ...state,
        isFetched: true,
        videos: action.payload.results
      };
    case `${GET_MOVIE_TRAILER}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    default:
      return state;
  }
};
