import React, { Component } from 'react';
import axios from 'axios';

class HomeView extends Component {
  state = {
    moviesTrend: [],
  };

  async componentDidMount() {
    const API_KEY = '822df93417c2789fa5aa8e4d6553456b';
    const trendingPeriod = 'week';
    // const trendingPeriod = 'day';

    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${trendingPeriod}?api_key=${API_KEY}`,
    );

    this.setState({ moviesTrend: response.data.results });
  }

  render() {
    return (
      <>
        <ul>
          <h1>THIS DAY TOP RATED</h1>

          {this.state.moviesTrend.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
