/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      books {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
  ) {
    listOrders(filter: $filter, limit: $limit) {
      items {
        id
        user
        date
        total
        createdAt
        updatedAt
      }
    }
  }
`;

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
  ) {
    listBooks(filter: $filter, limit: $limit) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
      }
    }
  }
`;

// Data: null
// Errors: [{path: null, locations: [{line: 1, column: 61, sourceName: null}],…}]
// 0: {path: null, locations: [{line: 1, column: 61, sourceName: null}],…}
// locations: [{line: 1, column: 61, sourceName: null}]
// message: "Validation error of type UnusedVariable: Unused variable nextToken"
// path: null
