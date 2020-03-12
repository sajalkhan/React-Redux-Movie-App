import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import MovieItem from '../components/MovieItem';
import { Link } from 'react-router-dom';

const MovieResult = (props) => {

    return (
        <div>
            <Link to="/fav">Favourite</Link>

            <Search />
            <br/><br/><br/>

            {props.movies.map(item => {
                return <MovieItem movie={item} key={item.id} facourite="false" />
            })}

        </div>
    );
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, null)(MovieResult);