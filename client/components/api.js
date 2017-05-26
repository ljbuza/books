
export const loadBooks = (id) => {
  // const bookID = parseInt(id.substring(1)) + 1;
  let booksEndpoint = 'http://localhost:8000/api/books/';
  if (id) { booksEndpoint = `${booksEndpoint}${id}`; }
  return fetch(booksEndpoint, {
    method: 'get',
    mode: 'cors',
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response error:${response.status}`);
    }
    return response.json();
  })
  // .then((json) => {
  //   return json.map(({ author, id, price, title }) ({
  //     author,
  //     id,
  //     price,
  //     title
  //   }));
  // })
  .catch((error) => {
    console.log(error);
  });
};

export const searchBooks = (searchString) => {
  const booksEndpoint = 'http://localhost:8000/api/books/';
  // const searchEndpoint = '{}?search={}'.format(booksEndpoint, searchString);
  const searchEndpoint = `${booksEndpoint}?search=${searchString}`;
  return fetch(searchEndpoint, {
    method: 'get',
    mode: 'cors',
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response error: {}'.format(response.status));
    }
    return response.json();
  })
  // .then((json) => {
  //   return json.map(({ author, id, price, title }) ({
  //     author,
  //     id,
  //     price,
  //     title
  //   }));
  // })
  .catch((error) => {
    console.log(error);
  });
};

