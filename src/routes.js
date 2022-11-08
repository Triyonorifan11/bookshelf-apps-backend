const {
  addBookHandler, getAllBook, getBookById, updateDataBook, deleteBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/{books?}',
    handler: getAllBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateDataBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;
