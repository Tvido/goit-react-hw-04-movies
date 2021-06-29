import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';

import axios from 'axios';

class SearchView extends Component {
  state = {
    movies: [],
    movieQuery: '',
    imagesPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movieQuery !== this.state.movieQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    this.setState({
      movieQuery: query,
    });
  };

  async fetchMovies() {
    const API_KEY = '822df93417c2789fa5aa8e4d6553456b';
    const { movieQuery } = this.state;

    const response = await axios.get(
      ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movieQuery}`,
    );
    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        {/* <h1>SearchBar</h1> */}
        <SearchBar onSubmit={this.onChangeQuery} />

        <ul className="">
          <MovieList movies={this.state.movies} />
        </ul>
      </>
    );
  }
}

export default SearchView;
