import { fetchMoviesSimilar } from '../../../helpers';

export const GET_MOVIES_SIMILAR = 'GET_MOVIES_SIMILAR';

export const getMoviesSimilar = id => {
  console.log(id);
  const data = fetchMoviesSimilar(id);

  return {
    type: GET_MOVIES_SIMILAR,
    payload: data
  };
};
