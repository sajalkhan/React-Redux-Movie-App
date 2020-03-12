import { FAVOURITE_MOVIE, REMOVE_FAVOURITE_MOVIE } from '../Action';

function favouriteMovie(state = [], action) {
    switch (action.type) {
        case FAVOURITE_MOVIE:
            var favList = [];
            var st = new Set();
            var movieList = [...state, action.movie];
            for(let i=0; i<movieList.length; i++)
            {
                if(!st.has(movieList[i].id))
                {
                    st.add(movieList[i].id);
                    favList.push(movieList[i]);
                }
            }
            return favList;
        case REMOVE_FAVOURITE_MOVIE:
            favList = state.filter(item => item.id !== action.movie.id);
            return favList;
        default:
            return state;
    }
}

export default favouriteMovie;