const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
  carts: [Cart]
}

type Service {
  _id: ID
  name: String
  price: Int
  image: String
}

type Cart {
  _id: ID
  service: [Service]
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(username: String!): User
  services: [Service]
  service(name: String!): Service
  carts: [Cart]
  cart(_id: ID!): Cart
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addService(name: String!, price: Int!, image: String!, cartId: ID!): Service
  addCart(event: String!, userId: ID!): Cart
}`

module.exports = typeDefs;