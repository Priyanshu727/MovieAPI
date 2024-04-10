import { SET_MOVIES, SET_SEARCH_QUERY } from './Action';

const initialState = {
  movies: [],
  searchQuery: '',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {...state,movies: action.payload,};
    case SET_SEARCH_QUERY:
      return {...state,searchQuery: action.payload,};
    default: return state;
  }
};

export default movieReducer;