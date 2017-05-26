import React from 'react';
import { Table } from 'semantic-ui-react';

export const BookRow = props => (
  <Table.Row>
    <Table.Cell> {props.title} </Table.Cell>
    <Table.Cell> {props.author} </Table.Cell>
  </Table.Row>
);

BookRow.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
};
