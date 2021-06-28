import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Cast from '../Components/Cast';
import Reviews from '../Components/Reviews';

import axios from 'axios';

class MovieDetailsView extends Component {
  state = {
    movie: null,
    genres: [],
    id: null,
    title: null,
    poster_path: null,
    overview: null,
    popularity: null,
    release_date: null,
  };

  async componentDidMount() {
    const API_KEY = '822df93417c2789fa5aa8e4d6553456b';

    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    );

    this.setState({ ...response.data });
  }

  render() {
    const {
      genres,
      id,
      title,
      poster_path,
      overview,
      popularity,
      release_date,
    } = this.state;

    const { match } = this.props;

    const date = `${release_date}`.substr(0, 4);

    return (
      <>
        <div key={id} className="">
          <div className="">
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
                className=""
              />
            ) : (
              <p className="">No photo</p>
            )}
          </div>

          <div className="">
            <h1>
              {title}({date})
            </h1>
            <p>User Score: {Math.round(popularity)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <h2>Additional information</h2>

          <ul>
            <li>
              <NavLink
                to={`${match.url}/cast`}
                className="NavLink"
                activeClassName="NavLink--active"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${match.url}/reviews`}
                className="NavLink"
                activeClassName="NavLink--active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path={`${match.path}/cast`} component={Cast} />

            <Route exact path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </div>
      </>
    );
  }
}

export default MovieDetailsView;
