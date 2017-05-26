import React from 'react';
import { Link } from 'react-router';
import { Item } from 'semantic-ui-react';

const resultRenderer = ({ author, id, price, title }) => (
  <Item>
    <Item.Content as={Link} to={`/Books/:${id}`}>
      <Item.Header content={title} />
      <Item.Meta>
        <span className="author">{author}</span>
      </Item.Meta>
    </Item.Content>
  </Item>
);

export default resultRenderer;
