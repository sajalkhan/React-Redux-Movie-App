import React from 'react';
import {connect} from 'react-redux';
import MovieItem from '../components/MovieItem';
import {Link} from 'react-router-dom';

const FavouriteMovieList = (props) => {

    return (
        <div>
            <Link to="/">Home</Link>
            
            <h4>my Favourite Movie list</h4>
            
            {props.favouritList.map(item=>{
                return <MovieItem movie={item} key={item.id} favourite="true"/>
            })}
        </div>
    );
}

function mapStateToProps(state){
    return{
        favouritList: state.favourite_movie
    }
}

export default connect(mapStateToProps, null)(FavouriteMovieList);