import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!, $fullName: String!, $phoneNumber: String!, $address: String!, $service: String!, $description: String!, $price: Int!, $eventStartDate: String!, $serviceStartDate: String!, $favoriteStyle: String!, $budget: Int!, $contactPerson: String!, $contactMethod: String!) {
  addUser(username: $username, email: $email, password: $password, fullName: $fullName, phoneNumber: $phoneNumber, address: $address, service: $service, description: $description, price: $price, eventStartDate: $eventStartDate, serviceStartDate: $serviceStartDate, favoriteStyle: $favoriteStyle, budget: $budget, contactPerson: $contactPerson, contactMethod: $contactMethod) {
    token
  }
}

`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}

`