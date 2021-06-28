import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import axios from 'axios';

import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import MoviesView from './views/MoviesView';
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
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          MoviesView
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
      <Route path="/books" component={MoviesView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
