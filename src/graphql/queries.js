/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactForm = /* GraphQL */ `
  query GetContactForm($id: ID!) {
    getContactForm(id: $id) {
      id
      name
      age
      email
      birthDate
      createdAt
      updatedAt
    }
  }
`;
export const listContactForms = /* GraphQL */ `
  query ListContactForms(
    $filter: ModelContactFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
        email
        birthDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
