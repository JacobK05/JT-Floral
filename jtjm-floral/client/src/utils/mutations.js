import { gql } from '@apollo/client'

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token 
      user {
        _id
        username
      }
    }
  }

`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }

`;


export const ADD_SERVICE = gql`
  mutation addService($service: String!, $description: String!, $price: Float!) {
    addService(service: $service, description: $description, price: $price) {
      _id
      service
      description
      price
    }
  }

export const ADD_RESERVE = gql`
mutation addReserve($name: String!, $service: String!, $description: String!, $price: Float!) {
  addReserve(name: $name, service: $service, description: $description, price: $price) {
    _id
    name
    service
    description
    price
  }
}


`;