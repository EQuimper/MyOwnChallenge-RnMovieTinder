import { fetchMoviePopular } from '../../../helpers';

export const GET_MOVIES_POPULAR = 'GET_MOVIES_POPULAR';

export const getMoviesPopular = () => {
  const data = fetchMoviePopular();

  return {
    type: GET_MOVIES_POPULAR,
    payload: data
  };
};
