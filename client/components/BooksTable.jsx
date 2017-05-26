import React from 'react';
import { Table } from 'semantic-ui-react';
import { BookRow } from './BookRow';

const BooksTable = props => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell><Table.HeaderCell>Author</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {props.books.map(book => <BookRow key={book.id} {...book} />)}
    </Table.Body>
  </Table>
);

BooksTable.propTypes = {
  books: React.PropTypes.array.isRequired,
};

export default BooksTable;
