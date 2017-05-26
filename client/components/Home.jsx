import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <h1>Our Books</h1>
    <div className="ui link list">
      <div className="active item">Home</div>
      <Link to="books" className="item">Books</Link>
      <Link to="about" className="item">About</Link>
    </div>
  </div>
);

export default Home;
