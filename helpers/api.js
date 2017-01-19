import { API_KEY } from '../constants/api';

const BASE_URL = 'https://api.themoviedb.org/3';

const fetchData = params =>
  fetch(`${BASE_URL}/${params}?api_key=${API_KEY}&language=en-US&page=1`)
  .then(res => res.json());

export const fetchMoviePopular = async () => {
  try {
    return await fetchData('movie/popular');
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieSimilar = async movieId => {
  try {
    await fetchData(`movie/${movieId}/similar`);
  } catch (err) {
    console.log(err);
  }
};
