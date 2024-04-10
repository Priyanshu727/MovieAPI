import { combineReducers } from 'redux';
import movieReducer from '../Redux/Reducer'; 

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer;