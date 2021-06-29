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
        HOME
      </NavLink>

      <NavLink
        to={routes.moviesView}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        WEEK TOP RATED
      </NavLink>

      <NavLink
        to={routes.searchBar}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        SEARCH
      </NavLink>
    </nav>
  );
};

export default Navigation;
