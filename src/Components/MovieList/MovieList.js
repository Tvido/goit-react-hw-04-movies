import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';

import '../../App.css';

const MovieList = ({ movies, match, location }) => {
  return (
    <ul className="MovieList">
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <NavLink
            to={{ pathname: `${match.url}/${id}`, state: { from: location } }}
            className=""
          >
            {/* <NavLink to={`${match.url}/${id}`} className=""> */}
            {/* <img src={movie.poster_path} alt={title} className="" />
            {movie.title} */}
            <MoviePreview
              poster_path={`https://image.tmdb.org/t/p/w300${poster_path}`}
              title={title}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
