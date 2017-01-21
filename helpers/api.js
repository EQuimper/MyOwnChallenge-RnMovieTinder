import { API_KEY } from '../constants/api';

const BASE_URL = 'https://api.themoviedb.org/3';

const fetchData = params =>
  fetch(`${BASE_URL}/${params}?api_key=${API_KEY}&language=en-US`)
  .then(res => res.json());

export const fetchMoviePopular = async () => {
  try {
    return await fetchData('movie/popular');
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoviesSimilar = async movieId => {
  try {
    return await fetchData(`movie/${movieId}/similar`);
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieTrailers = async movieId => {
  try {
    return await fetchData(`movie/${movieId}/videos`);
  } catch (err) {
    console.log(err);
  }
};
