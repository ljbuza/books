import React, { Component } from 'react';
import { loadBooks } from './api';

export default class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: '',
    };
  }

  componentDidMount() {
    loadBooks(this.props.params.id).then(book => this.setState({ book }));
  }


  render() {
    return (
      <div>
        <h1>{this.props.params.id}</h1>
        <h2>{this.state.book.title}</h2>
      </div>
    );
  }
}
