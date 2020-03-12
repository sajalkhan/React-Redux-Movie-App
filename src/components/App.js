import React from 'react';
import MovieResult from './MovieResult';
import FavouriteMovieList from './FavouriteMovieList';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="container">

      <div className="row">
        <div className="jumbotron jumbotron-fluid text-center col-md-12">
          <h1 className="display-4">Movies App</h1>
          <p>Who doesn't love movies!!</p>
        </div>
      </div>

      <div className="row">
        <Router>
          <Switch>
            <Route exact path="/" component={MovieResult}/>
            <Route exact path="/fav" component={FavouriteMovieList}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
