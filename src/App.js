import React from 'react';
import { Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';

import './App.css';

const App = () => (
  <>
    <Route exact path="/" component={HomeView} />
    <Route path="/goit-react-hw-04-movies" component={AuthorsView} />
  </>
);

export default App;
