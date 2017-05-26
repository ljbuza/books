import React, { Component } from 'react';
// import { Table } from 'semantic-ui-react';
import BooksTable from './BooksTable';
import { loadBooks } from './api';

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    loadBooks().then(books => this.setState({ books }));
  }

  render() {
    return (
      <div>
        <BooksTable
          books={this.state.books}
        />
      </div>
    );
  }
}

// /*class BooksTable extends Component {
//   render() {
//     const bookRows = [];
//     this.props.books.map((book) => {
//       bookRows.push(<Table.Row key={book.id.toString()}>
//         <Table.Cell> {book.title} </Table.Cell>
//         <Table.Cell> {book.author} </Table.Cell>
//       </Table.Row>);
//       return bookRows;
//     });
//     return (
//       <Table celled>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>Title</Table.HeaderCell><Table.HeaderCell>Author</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>
//         <Table.Body>
//           {bookRows}
//         </Table.Body>
//       </Table>
//     );
//   }
// }*/
