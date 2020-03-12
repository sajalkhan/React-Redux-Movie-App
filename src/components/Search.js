import React, { useState } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';

import { API_KEY } from '../secret';
import { movies }  from '../Action';
import { connect } from 'react-redux';

const Search = (props) => {

    const [state, setState] = useState(
        {
            movie: ''
        }
    );

    const search = () => {
        
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${state.movie}`;
        
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then(jsonObj=> {props.movies(jsonObj.results)});
    }

    return (
        <div>
            <Form inline className="col-md-12 col-md-offset-4">
                <FormGroup>
                    <label>Search</label>
                    {'  '}
                    <FormControl
                        type="text"
                        placeholder="Search Moveis.."
                        onChange={(e) => setState({ movie: e.target.value })} />
                    {' '}
                    <Button className="btn btn-success" onClick={() => search()}>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    );
}

export default connect(null, {movies} )(Search);