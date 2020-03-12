import React, { useState } from 'react';
import { favourite_movie, Remove_favourite_movie } from '../Action';

import { connect } from 'react-redux';

const imgUrl = "https://image.tmdb.org/t/p/w342";
const movieUrl = "https://www.themoviedb.org/movie/";


const MovieItem = (props) => {

    const [state, setState] = useState({
        favourite: false
    });

    const addToFav = () => {
        setState({ favourite: !state.favourite });
        props.favourite_movie(props.movie);
    }

    const remove_From_Fav = () => {
        setState({ favourite: !state.favourite });
        props.Remove_favourite_movie(props.movie);
    }

    const displayFavourite = () => {

        if (!state.favourite) {
            return <span className="glyphicon glyphicon-heart-empty"
                onClick={() => addToFav()}></span>
        }
        else {
            return <span className="glyphicon glyphicon-heart"
                onClick={() => remove_From_Fav()}></span>
        }
    }

    return (
        <div className="col-sm-12 col-sm-3">
            <div className="thumbnail">
                <a href={movieUrl+props.movie.id} target = "_blank"><img src={imgUrl + props.movie.poster_path} alt=".." /></a>
                <div className="caption">
                    <h4>{props.movie.title}</h4>
                    <p style={{"overflow-y":"scroll","height":"100px"}}>{props.movie.overview}</p>
                    <p>Release Date - {props.movie.release_date}</p>
                    <p>Ratings - <span className="badge badge-default"><span className="glyphicon glyphicon-star" area-hidden="true"></span>  {props.movie.vote_average}</span></p>
                    <p>{(!props.favourite) ? displayFavourite() : null}</p>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { favourite_movie, Remove_favourite_movie })(MovieItem);