import React, { Component } from 'react';
import MovieList from '../Components/MovieList';

import axios from 'axios';

class MoviesView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const API_KEY = '822df93417c2789fa5aa8e4d6553456b';
    const trendingPeriod = 'week';

    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${trendingPeriod}?api_key=${API_KEY}`,
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <div>
        <h1>THIS WEEK TOP RATED</h1>

        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesView;
