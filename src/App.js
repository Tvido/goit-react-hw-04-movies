import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

import AppBar from './Components/AppBar';
// import HomeView from './views/HomeView';
// import MoviesView from './views/MoviesView';
// import MovieDetailsView from './views/MovieDetailsView';
import NotFoundView from './views/NotFoundView';

import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /*webpackChunkName *home-view**/),
);

const MoviesView = lazy(() =>
  import('./views/MoviesView.js' /*webpackChunkName *movies-view**/),
);

const SearchBar = lazy(() =>
  import('./views/SearchBarView.js' /*webpackChunkName *search-bar-view**/),
);

const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView.js' /*webpackChunkName *movie-details-view**/
  ),
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.moviesView} component={MoviesView} />
        <Route path={routes.searchBar} component={SearchBar} />
        <Route path={routes.movieDetailsView} component={MovieDetailsView} />

        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
