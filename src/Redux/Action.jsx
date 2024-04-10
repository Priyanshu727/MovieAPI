import axios from 'axios';

const API_KEY = '3218d0adcf6211cd84ec97051cabd98c';

export const SET_MOVIES = 'SET_MOVIES';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const fetchAllMovies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
      dispatch(setMovies(response.data.results));
    } catch (error) {
      console.error('Error fetching all movies:', error);
    }
  };
};

export const searchMovies = (query) => {
  return async (dispatch) => {
    dispatch(setSearchQuery(query));
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1&api_key=${API_KEY}`);
      dispatch(setMovies(response.data.results));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
};