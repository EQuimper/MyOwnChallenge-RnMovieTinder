import { fetchMovieTrailers } from '../../../helpers';

export const GET_MOVIE_TRAILER = 'GET_MOVIE_TRAILER';

export const getMovieTrailer = id => {
  const data = fetchMovieTrailers(id);

  return {
    type: GET_MOVIE_TRAILER,
    payload: data
  };
};
