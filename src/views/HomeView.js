import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import MoviePreview from '../Components/MoviePreview';

class HomeView extends Component {
  state = {
    moviesTrend: [],
  };

  async componentDidMount() {
    const API_KEY = '822df93417c2789fa5aa8e4d6553456b';
    const trendingPeriod = 'day';

    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${trendingPeriod}?api_key=${API_KEY}`,
    );

    this.setState({ moviesTrend: response.data.results });
  }

  render() {
    return (
      <>
        <h1>THIS DAY TOP RATED</h1>
        <ul className="MovieList">
          {this.state.moviesTrend.map(({ id, poster_path, title }) => (
            // <li key={movie.id}>{movie.title}</li>
            <li key={id}>
              <NavLink to={`${this.props.match.url}/${id}`} className="">
                {/* {movie.title} */}
                <MoviePreview
                  poster_path={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  title={title}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
