import axios from 'axios';

const KEY = '851ffe53da79d37b9e7424b9cd604edc';

export const fetchTrendingMovie = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';

  const response = await axios.get(`${BASE_URL}?api_key=${KEY}`);

  return response.data;
};

export const fetchMovieDetails = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;

  const response = await axios.get(`${BASE_URL}/${id}?api_key=${KEY}`);

  return response.data;
};

export const fetchMovieCredits = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;

  const response = await axios.get(`${BASE_URL}/${id}/credits?api_key=${KEY}`);

  return response.data;
};

export const fetchMovieReviews = async id => {
  const BASE_URL = `https://api.themoviedb.org/3/movie/`;

  const response = await axios.get(
    `${BASE_URL}/${id}/reviews?api_key=${KEY}&page=1`
  );

  return response.data;
};

export const fetchMovieByQuery = async query => {
  const BASE_URL = `https://api.themoviedb.org/3/search/movie`;

  const response = await axios.get(
    `${BASE_URL}?api_key=${KEY}&query=${query}&page=1`
  );

  return response.data;
};
