import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import axios from 'axios';

import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView';
import NotFoundView from './views/NotFoundView';

import './App.css';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          MoviesView
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/movies" component={MoviesView} />
      <Route path="/movies/:movieId" component={MovieDetailsView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
