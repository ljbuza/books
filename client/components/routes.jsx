import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Books from './Books';
import BookDetail from './BookDetail';
import Home from './Home';
import About from './About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/books" component={Books} />
    <Route path="/books/:id" component={BookDetail} />
    <Route path="/about" component={About} />
  </Route>
 );
