import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>

      <NavLink
        to={routes.moviesView}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        MoviesView
      </NavLink>
    </nav>
  );
};

export default Navigation;
