import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';

import './App.css';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/authors">Authors</NavLink>
      </li>

      <li>
        <NavLink to="/books">BooksView</NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
      <Route path="/books" component={BooksView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
