import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';

const MovieList = ({ movies, match }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`${match.url}/${movie.id}`} className="">
            {/* {movie.title} */}
            <MoviePreview />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
