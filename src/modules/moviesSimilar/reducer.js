import { GET_MOVIES_SIMILAR } from './actions';

const INITIAL_STATE = {
  movies: [],
  isFetched: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_MOVIES_SIMILAR}_PENDING`:
      return { ...state,
        isFetched: false
      };
    case `${GET_MOVIES_SIMILAR}_FULFILLED`:
      return { ...state,
        isFetched: true,
        movies: [...state.movies, ...action.payload.results]
      };
    case `${GET_MOVIES_SIMILAR}_REJECTED`:
      return { ...state,
        isFetched: true,
        error: action.payload
      };
    default:
      return state;
  }
};
