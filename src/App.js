import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView';
import AppBar from './Components/AppBar';
// import NotFoundView from './views/NotFoundView';

import './App.css';

const App = () => (
  <>
    <AppBar />

    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route exact path={routes.moviesView} component={MoviesView} />
      <Route path={routes.movieDetailsView} component={MovieDetailsView} />
      {/* <Route component={NotFoundView} /> */}
    </Switch>
  </>
);

export default App;
