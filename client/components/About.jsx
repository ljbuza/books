import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About Our Books</h1>
        <div className="ui link list">
          <div className="active item">Home</div>
          <Link to="/books" className="item">Books</Link>
          <Link to="/about" className="item">About</Link>
        </div>
      </div>
      );
  }
}
