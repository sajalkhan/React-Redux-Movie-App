export const MOVIES = "MOVIES";
export const FAVOURITE_MOVIE = "FAVOURITE_MOVIE";
export const REMOVE_FAVOURITE_MOVIE = "REMOVE_FAVOURITE_MOVIE";

export function movies(items){
    const action = {
        type: MOVIES,
        items
    }
    return action;
}

export function favourite_movie(movie){
    const action = {
        type: FAVOURITE_MOVIE,
        movie
    }
    return action;
}

export function Remove_favourite_movie(movie){
    const action = {
        type: REMOVE_FAVOURITE_MOVIE,
        movie
    }
    return action;
}

