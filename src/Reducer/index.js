import movies from './movies_reducer';
import favourite_movie from './favouriteMovie_reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies,
    favourite_movie
})

export default rootReducer;
